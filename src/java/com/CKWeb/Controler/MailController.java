/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.CKWeb.Controler;

import java.io.Serializable;
import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.RequestScoped;
import javax.faces.context.FacesContext;

/**
 *
 * @author Diego Manuel
 */
@ManagedBean
@RequestScoped
public class MailController implements Serializable{

    private String nombre;
    private String apellido;
    private String email;
    private String comentario;
    private String telefono;
    /**
     * Creates a new instance of MailController
     */
    public MailController() {
    }

    public void enviarCorreo(){
        SendMail send=new SendMail(nombre, apellido, telefono, email, comentario);
        FacesContext.getCurrentInstance().addMessage("messages", new FacesMessage("Comentario enviado, recibira respuesta pronto."));
    }
    
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }
    
    
}
