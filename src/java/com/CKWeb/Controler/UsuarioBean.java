/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.CKWeb.Controler;

import com.CKWeb.Entitys.Usuario;
import com.CKWeb.Exceptions.CKWebException;
import com.CKWeb.Remote.UsuarioBeanRemote;
import java.io.Serializable;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.ejb.EJB;
import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.RequestScoped;
import javax.faces.bean.SessionScoped;
import javax.faces.context.FacesContext;

/**
 *
 * @author USER
 */
@ManagedBean
@SessionScoped
public class UsuarioBean implements Serializable{

    @EJB
    private UsuarioBeanRemote usuarioFacade;

    /*
     @EJB
     private UsuarioFacade usuarioFacade;*/
    private Usuario usuario;
    private String fecha;

    FacesContext context = FacesContext.getCurrentInstance();

    /**
     * Creates a new instance of UsuarioBean
     */
    public UsuarioBean() {
        usuario = new Usuario();
    }

    public void registrarUsuario() {
        try {
            usuarioFacade.registrar(usuario);
            FacesContext.getCurrentInstance().addMessage("mensajes", new FacesMessage("Este usuario Registrado"));
        } catch (CKWebException ex) {
            Logger.getLogger(UsuarioBean.class.getName()).log(Level.SEVERE, null, ex);
            FacesContext.getCurrentInstance().addMessage("mensajes", new FacesMessage("Este usuario no Registrado"));
        }
    }

    public void verificarNickName() {
        System.out.println("LLEGO");
        if (usuarioFacade.findByNickName(usuario.getNickname()) != null) {
            FacesContext.getCurrentInstance().addMessage("mensajes", new FacesMessage("NickName en Uso"));
        }
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public String getFecha() {
        return fecha;
    }

    public void setFecha(String fecha) {
        this.fecha = fecha;
        SimpleDateFormat formatoDelTexto = new SimpleDateFormat("yyyy-MM-dd");
        try {
            usuario.setFechanacimiento(formatoDelTexto.parse(fecha));
        } catch (ParseException ex) {
            Logger.getLogger(UsuarioBean.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

}