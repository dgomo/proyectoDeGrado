/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.CKWebMulti.Controller;

import com.CKWeb.Entitys.Usuario;
import com.CKWebMulti.Beans.AliadoBeanRemote;
import com.CKWebMulti.Entitys.Aliado;
import com.CKWebMulti.Exceptions.CKWebException;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collections;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.ejb.EJB;
import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.RequestScoped;
import javax.faces.bean.SessionScoped;
import javax.faces.context.FacesContext;
import javax.servlet.http.Part;

/**
 *
 * @author Personal
 */
@ManagedBean
@SessionScoped
public class AliadoController implements Serializable{

    @EJB
    private AliadoBeanRemote aliadoBean;

    private String nombre;
    private String url;
    private String descripcion;
    private Part fileUpload;
    private Aliado aliado;
    private ArrayList<Aliado> aliados = new ArrayList<Aliado>();
    private int num = 0;

    /**
     * Creates a new instance of AliadoController
     */
    public AliadoController() {
        setNum(0);
        System.out.println("Crea objeto aliado Controller");
        aliado = new Aliado();
    }

    public String llamar(){
        System.out.println("Llego a registrar aliado");
        return registrar();
    }
    
    public String registrar() {
        FacesContext fc = FacesContext.getCurrentInstance();
        String r = fc.getExternalContext().getRealPath("");
        Usuario usuario = (Usuario) fc.getExternalContext().getSessionMap().get("usuario");
        aliado.setNombre(nombre);
        aliado.setDescripcion(descripcion);
        aliado.setUrl(url);
        System.out.println(":::::::::::::::::::::::::::::::::::::::::::::::::");
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
            aliado.setImagen(fileUpload.getSubmittedFileName());
        } catch (IOException ex) {
            System.err.println(ex.getMessage());
            Logger.getLogger(EventoController.class.getName()).log(Level.SEVERE, null, ex);
        }
        try {
            aliadoBean.registrar(aliado);
            url = "";
            nombre = "";
            descripcion = "";
            aliado = new Aliado();
            FacesContext.getCurrentInstance().addMessage("messages", new FacesMessage("El Aliado se ha Registrado"));
            return "/home";
        } catch (CKWebException ex) {
            FacesContext.getCurrentInstance().addMessage("messages", new FacesMessage(ex.getMessage()));
            System.out.println(ex.getMessage());
            return "faces/crearAliado.xhtml";
        }
    }

    public void findAll() {       
        aliados.clear();
        ArrayList<Aliado> subEvento = new ArrayList<Aliado>();
        subEvento = aliadoBean.findAll();
        Collections.reverse(subEvento);
        if ((subEvento.size() / (num + 5)) > 0) {
            for (int i = num; i < num + 5; i++) {
                aliados.add(subEvento.get(i));
            }
        } else {
            for (int i = num; i < subEvento.size(); i++) {
                aliados.add(subEvento.get(i));
            }
        }
    }

    public String paginarSig() {
        ArrayList<Aliado> subEvento = new ArrayList<Aliado>();
        subEvento = aliadoBean.findAll();
        if (num + 5 < subEvento.size()) {
            setNum(num + 5);
        }
        return "/aliados";
    }

    public String paginarAnt() {
        ArrayList<Aliado> subEvento = new ArrayList<Aliado>();
        subEvento = aliadoBean.findAll();
        if ((num - 5) >= 0) {
            setNum(num - 5);
        }
        return "/aliados";
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Part getFileUpload() {
        return fileUpload;
    }

    public void setFileUpload(Part fileUpload) {
        this.fileUpload = fileUpload;
    }

    public ArrayList<Aliado> getAliados() {
        return aliados;
    }

    public void setAliados(ArrayList<Aliado> aliados) {
        this.aliados = aliados;
    }

    public int getNum() {
        return num;
    }

    public void setNum(int num) {
        this.num = num;
    }
}