/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.CKWeb.Controler;

import com.CKWeb.Entitys.Pregunta;
import com.CKWeb.Entitys.Tipodeusuario;
import com.CKWeb.Entitys.Usuario;
import com.CKWeb.Exceptions.CKWebException;
import com.CKWeb.Remote.PreguntaBeanRemote;
import com.CKWeb.Remote.TipodeusuarioBeanRemote;
import com.CKWeb.Remote.UsuarioBeanRemote;
import java.io.IOException;
import java.io.Serializable;
import java.util.Calendar;
import java.util.Date;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import javax.ejb.EJB;
import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.RequestScoped;
import javax.faces.bean.SessionScoped;
import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.validator.ValidatorException;

/**
 *
 * @author USER
 */
@ManagedBean
@RequestScoped
public class registroController implements Serializable {

    @EJB
    private UsuarioBeanRemote usuarioFacade;
    @EJB
    private PreguntaBeanRemote preguntaFacade;
    @EJB
    private TipodeusuarioBeanRemote tipodeusuarioFacade;

    /*
     @EJB
     private TipodeusuarioFacade tipodeusuarioFacade;

     @EJB
     private PreguntaFacade preguntaFacade;

     @EJB
     private UsuarioFacade usuarioFacade;*/
    private Usuario usuario;
    private Pregunta pregunta;
    private String nuevaContraseña;
    private String confirmContraseña;
    private String actualContraseña;
    private String tipoUsuario;
    private String fechaCenvertir;

    /**
     * Creates a new instance of registroController
     */
    public registroController() {
        usuario = new Usuario();
        pregunta = new Pregunta();
    }

    public String registrar() {
        String patron = "20[0-9][0-9]-[0-1][0-9]-[0-3][0-9]";
        Pattern pat = Pattern.compile(patron);
        Matcher mat = pat.matcher(fechaCenvertir);
        System.out.println("fecha: " + fechaCenvertir);
        if (!mat.matches()) {
            FacesContext.getCurrentInstance().addMessage("messages", new FacesMessage("Formato de fecha incorrecto"));
            return "/registrar";
        } else {
            String patren="[0-9]+";
            Pattern part=Pattern.compile(patren);
            Matcher mart=part.matcher(usuario.getCedula());
            if(!mart.matches()){
                FacesContext.getCurrentInstance().addMessage("messages", new FacesMessage("Ingrese una cedula correcta"));
                return "/registrar";
            } else {
                System.out.println("Nombre: " + usuario.getNombre());
                findByDate();
                Tipodeusuario tipo;
                tipo = tipodeusuarioFacade.findByName(tipoUsuario);
                usuario.setId(tipo);
                try {
                    usuarioFacade.registrar(usuario);
                    pregunta.setCedula(usuario);
                    preguntaFacade.registrarPregunta(pregunta);
                    FacesContext.getCurrentInstance().addMessage("messages", new FacesMessage("El usuario se registro con exito"));
                    return "/login";
                } catch (CKWebException e) {
                    FacesContext.getCurrentInstance().addMessage("messages", new FacesMessage(e.getMessage()));
                    return "/registrar";
                }
            }
        }
    }

    public void findByNombre() {
        if (tipodeusuarioFacade.findByName(tipoUsuario) == null) {
            FacesContext.getCurrentInstance().addMessage("messages", new FacesMessage("Este tipo de usuario no existe."));
        }
    }

    public String loginUsuario() {
        FacesContext context = FacesContext.getCurrentInstance();
        Usuario usuarioAux = usuarioFacade.findByNickName(usuario.getNickname());
        if (usuarioAux != null) {
            if (usuarioAux.getContrasena().equals(usuario.getContrasena())) {
                usuario = usuarioAux;
                context.getExternalContext().getSessionMap().put("usuario", usuarioAux);
                System.out.println("Usuario: " + usuario.getNombre());
                return "/faces/index.xhtml";
            } else {
                FacesMessage message = new FacesMessage(FacesMessage.SEVERITY_ERROR,
                        "Contraseña incorrecta para: " + usuarioAux.getNombre(), "Autenticación Erronea");
                context.addMessage("mensaje", message);
                return "/faces/login.xhtml";
            }
        } else {
            FacesMessage message = new FacesMessage(FacesMessage.SEVERITY_ERROR,
                    "Usuario inexistente, por favor registrese", "Autenticación Erronea");
            context.addMessage("mensaje", message);
            return "/faces/login.xhtml";
        }
    }

    public void logout() {
        try {
            FacesContext context = FacesContext.getCurrentInstance();
            context.getExternalContext().getSessionMap().clear();
            context.getExternalContext().redirect(context.getExternalContext().getRequestContextPath()+"/home");
        } catch (IOException ex) {
            Logger.getLogger(registroController.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    public void validate(FacesContext context, UIComponent ui, Object cad) throws ValidatorException {
        String cadena = (String) cad;
        boolean bool = false;
        int indice = 0;
        for (int i = 0; i < cadena.length(); i++) {
            if (cadena.charAt(i) == '@') {
                bool = true;
                indice = i;
            }
        }
        if (bool) {
            String aux = "";
            for (int i = indice + 1; i < cadena.length(); i++) {
                aux = aux + cadena.charAt(i);
            }
        } else {
            throw new ValidatorException(new FacesMessage("Ingrese un correo valido"));
        }
    }

    public void findByNickName() {
        if (usuarioFacade.findByNickName(usuario.getNickname()) != null) {
            FacesContext.getCurrentInstance().addMessage("messages", new FacesMessage("El NickName se encuentra en uso"));
        }
    }

    public void findByNickNameForQuestion() {
        usuario = usuarioFacade.findByNickName(usuario.getNickname());
        if (usuario == null) {
            FacesContext.getCurrentInstance().addMessage("messages", new FacesMessage("El NickName no existe o es incorrecto"));
        } else {
            pregunta = preguntaFacade.findByCedula(usuario);
        }
    }

    public void recuperarContraseña() {
        usuario = usuarioFacade.findByNickName(usuario.getNickname());
        try {
            usuarioFacade.recuperarContraseña(usuario.getCedula(), pregunta);
            FacesContext.getCurrentInstance().addMessage("messages", new FacesMessage("Por favor revise su correo"));
        } catch (CKWebException ex) {
            Logger.getLogger(registroController.class.getName()).log(Level.SEVERE, null, ex);
            FacesContext.getCurrentInstance().addMessage("messages", new FacesMessage(ex.getMessage()));
        }
    }

    public void findByCedula() {
        if (usuarioFacade.findByCedula(usuario.getCedula()) != null) {
            FacesContext.getCurrentInstance().addMessage("messages", new FacesMessage("La cedula ya se encuntra registrada"));
        }
    }

    public void modificarInformacion() {
        FacesContext fc = FacesContext.getCurrentInstance();
        Usuario usuarioAux = (Usuario) fc.getExternalContext().getSessionMap().get("usuario");
        System.out.println(usuarioAux.getNombre());
        if (usuarioAux.getContrasena().equals(usuario.getContrasena())) {
            usuarioAux.setCorreo(usuario.getCorreo());
            usuarioFacade.updateUsuario(usuarioAux);
            FacesContext.getCurrentInstance().addMessage("messages", new FacesMessage("Información actualizada."));
        } else {
            usuario = usuarioAux;
            FacesContext.getCurrentInstance().addMessage("messages", new FacesMessage("La contraseña esta mal."));
        }
    }

    public void cambiarContraseña() {
        FacesContext fc = FacesContext.getCurrentInstance();
        Usuario usuarioAux = (Usuario) fc.getExternalContext().getSessionMap().get("usuario");
        if (nuevaContraseña.equals(confirmContraseña)) {
            if (actualContraseña.equals(usuarioAux.getContrasena())) {
                usuarioAux.setContrasena(nuevaContraseña);
                usuarioFacade.updateUsuario(usuarioAux);
                FacesContext.getCurrentInstance().addMessage("mensajes", new FacesMessage("La contraseña se a actualizado"));
            } else {
                FacesContext.getCurrentInstance().addMessage("mensajes", new FacesMessage("La contraseña es incorrecta"));
            }
        } else {
            FacesContext.getCurrentInstance().addMessage("mensajes", new FacesMessage("las contraseñas no coinciden"));
        }
    }

    public void findByDate() {
        String[] array = fechaCenvertir.split("-");
        int anio = Integer.parseInt(array[0]);
        int mes = Integer.parseInt(array[1]);
        int dia = Integer.parseInt(array[2]);
        Calendar cal = Calendar.getInstance();
        cal.set(anio, mes - 1, dia);
        java.util.Date nuevaFecha = cal.getTime();
        usuario.setFechanacimiento(nuevaFecha);
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public Pregunta getPregunta() {
        return pregunta;
    }

    public void setPregunta(Pregunta pregunta) {
        this.pregunta = pregunta;
    }

    public String getNuevaContraseña() {
        return nuevaContraseña;
    }

    public void setNuevaContraseña(String nuevaContraseña) {
        this.nuevaContraseña = nuevaContraseña;
    }

    public String getConfirmContraseña() {
        return confirmContraseña;
    }

    public void setConfirmContraseña(String confirmContraseña) {
        this.confirmContraseña = confirmContraseña;
    }

    public String getActualContraseña() {
        return actualContraseña;
    }

    public void setActualContraseña(String actualContraseña) {
        this.actualContraseña = actualContraseña;
    }

    public String getTipoUsuario() {
        return tipoUsuario;
    }

    public void setTipoUsuario(String tipoUsuario) {
        this.tipoUsuario = tipoUsuario;
    }

    public String getFechaCenvertir() {
        return fechaCenvertir;
    }

    public void setFechaCenvertir(String fechaCenvertir) {
        this.fechaCenvertir = fechaCenvertir;
    }

}