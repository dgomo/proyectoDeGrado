/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.CKWebMulti.Controller;

import com.CKWeb.Entitys.Usuario;
import com.CKWebMulti.Beans.EventoBeanRemote;
import com.CKWebMulti.Entitys.Evento;
import com.CKWebMulti.Exceptions.CKWebException;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.Serializable;
import java.util.Calendar;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import javax.ejb.EJB;
import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.RequestScoped;
import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.validator.ValidatorException;
import javax.servlet.http.Part;

/**
 *
 * @author USER
 */
@ManagedBean
@RequestScoped
public class EventoController implements Serializable{

    @EJB
    private com.CKWebMulti.Beans.UsuarioBeanRemote usuarioBean;

    @EJB
    private EventoBeanRemote eventoBean;

    /**
     * Creates a new instance of EventoControler
     */
    private String nombre;
    private String descripcion;
    private String fecha;
    private Evento evento;
    private Part fileUpload;

    public EventoController() {
        evento = new Evento();
    }

    public void validateDate(FacesContext arg0, UIComponent arg1, Object arg2)
            throws ValidatorException {
        String patron = "[0-3][0-9]/[0-1][0-9]/20[0-9][0-9]";
        Pattern pat = Pattern.compile(patron);
        Matcher mat = pat.matcher(fecha);
        if (!mat.matches()) {
            throw new ValidatorException(new FacesMessage("Formato de fecha incorrecto"));
        }
    }

    public String registrar() {
        String patron = "20[0-9][0-9]-[0-1][0-9]-[0-3][0-9]";
        Pattern pat = Pattern.compile(patron);
        Matcher mat = pat.matcher(fecha);
        System.out.println("fecha: " + fecha);
        if (!mat.matches()) {
            FacesContext.getCurrentInstance().addMessage("messages", new FacesMessage("Formato de fecha incorrecto"));
            return "/crearNoticia";
        } else {
            FacesContext fc = FacesContext.getCurrentInstance();
            String r = fc.getExternalContext().getRealPath("");
            Usuario usuario = (Usuario) fc.getExternalContext().getSessionMap().get("usuario");
            evento.setCedula(usuarioBean.findByCedula(usuario.getCedula()));
            evento.setNombre(nombre);
            findByDate();
            evento.setDescripcion(descripcion);
            try {
                InputStream in = fileUpload.getInputStream();
                OutputStream out = new FileOutputStream(new File(r + "\\images\\" + fileUpload.getSubmittedFileName()));
                int read = 0;
                final byte[] bytes = new byte[1024];
                while ((read = in.read(bytes)) != -1) {
                    out.write(bytes, 0, read);
                }
                in.close();
                out.close();
                evento.setImagen(fileUpload.getSubmittedFileName());
            } catch (IOException ex) {
                Logger.getLogger(EventoController.class.getName()).log(Level.SEVERE, null, ex);
            }
            try {
                eventoBean.registrarEvento(evento);
                FacesContext.getCurrentInstance().addMessage("messages", new FacesMessage("La Noticia se ha Registrado"));
                return "/crearNoticia";
            } catch (CKWebException ex) {
                FacesContext.getCurrentInstance().addMessage("messages", new FacesMessage(ex.getMessage()));
                return "/crearNoticia";
            }
        }
    }

    public void findByDate() {
        String[] array = fecha.split("-");
        int anio = Integer.parseInt(array[0]);
        int mes = Integer.parseInt(array[1]);
        int dia = Integer.parseInt(array[2]);
        Calendar cal = Calendar.getInstance();
        cal.set(anio, mes - 1, dia);
        java.util.Date nuevaFecha = cal.getTime();
        evento.setFecha(nuevaFecha);
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getFecha() {
        return fecha;
    }

    public void setFecha(String fecha) {
        this.fecha = fecha;
    }

    public Part getFileUpload() {
        return fileUpload;
    }

    public void setFileUpload(Part fileUpload) {
        this.fileUpload = fileUpload;
    }

}