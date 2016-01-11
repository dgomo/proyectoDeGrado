/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.CKWeb.Controler;

import com.CKWeb.Entitys.Permiso;
import com.CKWeb.Entitys.Preguntas;
import com.CKWeb.Entitys.Recursos;
import com.CKWeb.Entitys.Tipodeusuario;
import com.CKWeb.Entitys.Usuario;
import com.CKWeb.Remote.PermisoBeanRemote;
import com.CKWeb.Remote.RecursosBeanRemote;
import com.CKWeb.Remote.TipodeusuarioBeanRemote;
import java.io.Serializable;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Vector;
import javax.ejb.EJB;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.faces.context.FacesContext;
import javax.faces.model.SelectItem;
import javax.inject.Named;

/**
 *
 * @author user
 */
@ManagedBean
@SessionScoped
public class UtilControler implements Serializable {

    @EJB
    private TipodeusuarioBeanRemote tipodeusuarioFacade;
    @EJB
    private PermisoBeanRemote permisoFacade;
    @EJB
    private RecursosBeanRemote recursosFacade;

    private String nombre1;
    private String url1;
    private String nombre2;
    private String url2;
    private String nombre3;
    private String url3;
    private String nombre4;
    private String url4;
    private String nombre5;
    private String url5;
    private String nombre6;
    private String url6;
    private String nombre7;
    private String url7;
    private String nombre8;
    private String url8;

    /**
     * Creates a new instance of UtilControler
     */
    public UtilControler() {
        cargar();
    }

    public void cargar() {
        FacesContext fc = FacesContext.getCurrentInstance();
        Usuario usuario = (Usuario) fc.getExternalContext().getSessionMap().get("usuario");
        if (usuario != null) {
            Tipodeusuario tipousuario = tipodeusuarioFacade.findById(usuario.getId().getId());
            Vector<Permiso> permisos = permisoFacade.findAllById(tipousuario);
            Recursos recurso;
            if (0 < permisos.size()) {
                recurso = permisos.get(0).getRecursodir();
                nombre1 = recurso.getNombre();
                url1 = recurso.getUrl();
            } else {
                nombre1 = "";
                url1 = "";
            }
            if (1 < permisos.size()) {
                recurso = permisos.get(1).getRecursodir();
                nombre2 = recurso.getNombre();
                url2 = recurso.getUrl();
            } else {
                nombre2 = "";
                url2 = "";
            }
            if (2 < permisos.size()) {
                recurso = permisos.get(2).getRecursodir();
                nombre3 = recurso.getNombre();
                url3 = recurso.getUrl();
            } else {
                nombre3 = "";
                url3 = "";
            }
            if (3 < permisos.size()) {
                recurso = permisos.get(3).getRecursodir();
                nombre4 = recurso.getNombre();
                url4 = recurso.getUrl();
            } else {
                nombre4 = "";
                url4 = "";
            }
            if (4 < permisos.size()) {
                recurso = permisos.get(4).getRecursodir();
                nombre5 = recurso.getNombre();
                url5 = recurso.getUrl();
            } else {
                nombre5 = "";
                url5 = "";
            }
            if (5 < permisos.size()) {
                recurso = permisos.get(5).getRecursodir();
                nombre6 = recurso.getNombre();
                url6 = recurso.getUrl();
            } else {
                nombre6 = "";
                url6 = "";
            }
            if (6 < permisos.size()) {
                recurso = permisos.get(6).getRecursodir();
                nombre7 = recurso.getNombre();
                url7 = recurso.getUrl();
            } else {
                nombre7 = "";
                url7 = "";
            }
            if (7 < permisos.size()) {
                recurso = permisos.get(7).getRecursodir();
                nombre8 = recurso.getNombre();
                url8 = recurso.getUrl();
            } else {
                nombre8 = "";
                url8 = "";
            }
        } else {
            nombre1 = "Home";
            url1 = "/home";
            nombre2 = "Sobre CKWeb";
            url2 = "/sobre-CKWeb";
            nombre3 = "Noticias";
            url3 = "/noticias";
            nombre4 = "Archivo";
            url4 = "/archivo";
            nombre5 = "Aliados";
            url5 = "/aliados";
            nombre6 = "Login";
            url6 = "/login";
            nombre7 = "Contacto";
            url7 = "/contacto";
            nombre8 = "";
            url8 = "#";
        }
    }

    public String recuperarUsuario() {
        FacesContext fc = FacesContext.getCurrentInstance();
        Usuario usuario = (Usuario) fc.getExternalContext().getSessionMap().get("usuario");
        if (usuario == null) {
            return "";
        } else {
            return "Bienvenido:  " + usuario.getNombre() + " " + usuario.getApellido();
        }
    }

    public String fechaIndex() {
        Calendar calendario = Calendar.getInstance();
        Date date = new Date(calendario.getTimeInMillis());
        DateFormat df = DateFormat.getDateInstance(DateFormat.FULL);
        String fecha = df.format(date);
        String c = "" + fecha.charAt(0);
        return "Hoy es " + c.toUpperCase() + fecha.substring(1, fecha.length());
    }

    public boolean isSession() {
        FacesContext fc = FacesContext.getCurrentInstance();
        Usuario usuario = (Usuario) fc.getExternalContext().getSessionMap().get("usuario");
        if (usuario == null) {
            return false;
        } else {
            return true;
        }
    }

    public SelectItem[] tipoUsuarioValues() {
        SelectItem[] items = new SelectItem[Preguntas.values().length];
        int i = 0;
        for (Preguntas ti : Preguntas.values()) {
            items[i++] = new SelectItem(ti.getLabel(), ti.getLabel());
        }
        return items;
    }

    public SelectItem[] preguntaValues() {
        SelectItem[] items = new SelectItem[Preguntas.values().length];
        int i = 0;
        for (Preguntas ti : Preguntas.values()) {
            items[i++] = new SelectItem(ti.getLabel(), ti.getLabel());
        }
        return items;
    }

    public List<Recursos> obtenerOpciones() {
        FacesContext fc = FacesContext.getCurrentInstance();
        Usuario usuario = (Usuario) fc.getExternalContext().getSessionMap().get("usuario");
        if (usuario != null) {
            Tipodeusuario tipousuario = tipodeusuarioFacade.findById(usuario.getId().getId());
            Vector<Permiso> permisos = permisoFacade.findAllById(tipousuario);
            ArrayList<Recursos> array = new ArrayList<Recursos>();
            for (Permiso permiso : permisos) {
                array.add(recursosFacade.findById(permiso.getRecursodir().getId()));
            }
            return (List<Recursos>) array;
        } else {
            ArrayList<Recursos> array = new ArrayList<Recursos>();
            Recursos recurso = new Recursos();
            recurso.setNombre("Home");
            recurso.setUrl("faces/index.xhtml");
            array.add(recurso);
            recurso = new Recursos();
            recurso.setNombre("Sobre CKWeb");
            recurso.setUrl("faces/sobre-ckweb.xhtml");
            array.add(recurso);
            recurso = new Recursos();
            recurso.setNombre("Franjas");
            recurso.setUrl("faces/franjas.xhtml");
            array.add(recurso);
            recurso = new Recursos();
            recurso.setNombre("Noticias");
            recurso.setUrl("faces/noticias.xhtml");
            array.add(recurso);
            recurso = new Recursos();
            recurso.setNombre("Archivo");
            recurso.setUrl("faces/foros.xhtml");
            array.add(recurso);
            recurso = new Recursos();
            recurso.setNombre("Aliados");
            recurso.setUrl("faces/aliados.xhtml");
            array.add(recurso);
            recurso = new Recursos();
            recurso.setNombre("Contacto");
            recurso.setUrl("faces/contacto.xhtml");
            array.add(recurso);
            recurso = new Recursos();
            recurso.setNombre("Login");
            recurso.setUrl("faces/login.xhtml");
            array.add(recurso);
            return (List<Recursos>) array;
        }
    }

    public String getNombre1() {
        cargar();
        return nombre1;
    }

    public void setNombre1(String nombre1) {
        this.nombre1 = nombre1;
    }

    public String getUrl1() {
        cargar();
        return url1;
    }

    public void setUrl1(String url1) {
        this.url1 = url1;
    }

    public String getNombre2() {
        cargar();
        return nombre2;
    }

    public void setNombre2(String nombre2) {
        this.nombre2 = nombre2;
    }

    public String getUrl2() {
        cargar();
        return url2;
    }

    public void setUrl2(String url2) {
        this.url2 = url2;
    }

    public String getNombre3() {
        cargar();
        return nombre3;
    }

    public void setNombre3(String nombre3) {
        this.nombre3 = nombre3;
    }

    public String getUrl3() {
        cargar();
        return url3;
    }

    public void setUrl3(String url3) {
        this.url3 = url3;
    }

    public String getNombre4() {
        cargar();
        return nombre4;
    }

    public void setNombre4(String nombre4) {
        this.nombre4 = nombre4;
    }

    public String getUrl4() {
        cargar();

        return url4;
    }

    public void setUrl4(String url4) {
        this.url4 = url4;
    }

    public String getNombre5() {
        cargar();
        return nombre5;
    }

    public void setNombre5(String nombre5) {
        this.nombre5 = nombre5;
    }

    public String getUrl5() {
        cargar();
        return url5;
    }

    public void setUrl5(String url5) {
        this.url5 = url5;
    }

    public String getNombre6() {
        cargar();
        return nombre6;
    }

    public void setNombre6(String nombre6) {
        this.nombre6 = nombre6;
    }

    public String getUrl6() {
        cargar();
        return url6;
    }

    public void setUrl6(String url6) {
        this.url6 = url6;
    }

    public String getNombre7() {
        cargar();
        return nombre7;
    }

    public void setNombre7(String nombre7) {
        this.nombre7 = nombre7;
    }

    public String getUrl7() {
        cargar();
        return url7;
    }

    public void setUrl7(String url7) {
        this.url7 = url7;
    }

    public String getNombre8() {
        cargar();
        return nombre8;
    }

    public void setNombre8(String nombre8) {
        this.nombre8 = nombre8;
    }

    public String getUrl8() {
        cargar();
        return url8;
    }

    public void setUrl8(String url8) {
        this.url8 = url8;
    }
}
