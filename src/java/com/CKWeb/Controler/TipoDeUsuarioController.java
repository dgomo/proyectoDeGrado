/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.CKWeb.Controler;

import com.CKWeb.Entitys.Permiso;
import com.CKWeb.Entitys.Tipodeusuario;
import com.CKWeb.Exceptions.CKWebException;
import com.CKWeb.Remote.PermisoBeanRemote;
import com.CKWeb.Remote.RecursosBeanRemote;
import com.CKWeb.Remote.TipodeusuarioBeanRemote;
import java.io.Serializable;

import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.ejb.EJB;
import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.RequestScoped;
import javax.faces.context.FacesContext;

/**
 *
 * @author USER
 */
@ManagedBean
@RequestScoped
public class TipoDeUsuarioController implements Serializable{

    @EJB
    private TipodeusuarioBeanRemote tipodeusuarioFacade;
    @EJB
    private RecursosBeanRemote recursosFacade;
    @EJB
    private PermisoBeanRemote permisoFacade;

    private String nombre;
    private boolean livestream;
    private boolean tipoUsuario;
    private boolean modificar;
    private boolean contenido;
    private boolean registrar;

    /**
     * Creates a new instance of TipoDeUsuarioController
     */
    public TipoDeUsuarioController() {

    }

    public void crearTipoUsuario() {
        Tipodeusuario tipodeusuario = new Tipodeusuario();
        tipodeusuario.setHabilitado(true);
        tipodeusuario.setNombre(nombre);
        tipodeusuario.setId(tipodeusuarioFacade.count() + 1);
        ArrayList<Permiso> lista = new <Permiso>ArrayList();
        Permiso permiso;
        int contar = permisoFacade.count();
        if (livestream) {
            permiso = new Permiso();
            contar++;
            permiso.setIdpermiso(contar);
            permiso.setPermitido(true);
            permiso.setRecursodir(recursosFacade.findByName("Livestream"));
            lista.add(permiso);
        }
        if (tipoUsuario) {
            permiso = new Permiso();
            contar++;
            permiso.setIdpermiso(contar);
            permiso.setPermitido(true);
            permiso.setRecursodir(recursosFacade.findByName("Tipo de Usuario"));
            lista.add(permiso);
        }
        if (contenido) {
            permiso = new Permiso();
            contar++;
            permiso.setIdpermiso(contar);
            permiso.setPermitido(true);
            permiso.setRecursodir(recursosFacade.findByName("Contenido"));
            lista.add(permiso);
        }
        if (registrar) {
            permiso = new Permiso();
            contar++;
            permiso.setIdpermiso(contar);
            permiso.setPermitido(true);
            permiso.setRecursodir(recursosFacade.findByName("Registrar"));
            lista.add(permiso);
        }
        permiso = new Permiso();
        contar++;
        permiso.setIdpermiso(contar);
        permiso.setPermitido(true);
        permiso.setRecursodir(recursosFacade.findByName("Logout"));
        permiso = new Permiso();
        contar++;
        permiso.setIdpermiso(contar);
        permiso.setPermitido(true);
        permiso.setRecursodir(recursosFacade.findByName("Modificar"));
        lista.add(permiso);
        lista.add(permiso);
        tipodeusuario.setPermisoCollection(lista);
        try {
            tipodeusuarioFacade.crearTipoDeUsuairo(tipodeusuario);
            FacesContext.getCurrentInstance().addMessage("messages", new FacesMessage("El tipo de usuario fue creado con exito"));
        } catch (CKWebException ex) {
            Logger.getLogger(TipoDeUsuarioController.class.getName()).log(Level.SEVERE, null, ex);
            FacesContext.getCurrentInstance().addMessage("messages", new FacesMessage(ex.getMessage()));
        }
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public boolean isLivestream() {
        return livestream;
    }

    public void setLivestream(boolean livestream) {
        this.livestream = livestream;
    }

    public boolean isTipoUsuario() {
        return tipoUsuario;
    }

    public void setTipoUsuario(boolean tipoUsuario) {
        this.tipoUsuario = tipoUsuario;
    }

    public boolean isModificar() {
        return modificar;
    }

    public void setModificar(boolean modificar) {
        this.modificar = modificar;
    }

    public boolean isContenido() {
        return contenido;
    }

    public void setContenido(boolean contenido) {
        this.contenido = contenido;
    }

    public boolean isRegistrar() {
        return registrar;
    }

    public void setRegistrar(boolean registrar) {
        this.registrar = registrar;
    }
}