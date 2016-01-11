/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.CKWebMulti.Controller;

import com.CKWeb.Entitys.Usuario;
import com.CKWebMulti.Exceptions.CKWebException;
import com.CKWebMulti.Beans.TemaBeanRemote;
import com.CKWebMulti.Beans.UsuarioBeanRemote;
import com.CKWebMulti.Entitys.Tag;
import com.CKWebMulti.Entitys.Tema;
import com.sun.codemodel.JExpr;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.ejb.EJB;
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
public class TemaController implements Serializable{
    @EJB
    private TemaBeanRemote temaBean;

    
    @EJB
    private UsuarioBeanRemote usuarioBean;

    private Tema tema;
    private ArrayList<String> tags;
    private String palabra;

    /**
     * Creates a new instance of TemaController
     */
    public TemaController() {
        tema = new Tema();
        tags = new ArrayList<String>();
    }

    public void registrarTema() {
        FacesContext fc = FacesContext.getCurrentInstance();
        Usuario usuario = (Usuario) fc.getExternalContext().getSessionMap().get("usuario");
        System.out.println("Usuario en el sistema: " + usuario.getCedula());
        tema.setCedula(usuarioBean.findByCedula(usuario.getCedula()));
        //tema.setTagCollection(tags);        
        try {
            temaBean.registrar(tema,tags);
            tags.clear();
            tema = new Tema();
        } catch (CKWebException ex) {
            Logger.getLogger(TemaController.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    public void addTag() {
        Tag tag;
        String words[] = palabra.split(",");
        for (int i = 0; i < words.length; i++) {
            boolean ban = true;
            for (int j = 0; j < tags.size(); j++) {
                if (words[i] == tags.get(j)) {
                    ban = false;
                }
            }
            if (ban) {
                String palabra=words[i].toLowerCase();
                tags.add(palabra);
            }
        }
    }

    public Tema getTema() {
        return tema;
    }

    public void setTema(Tema tema) {
        this.tema = tema;
    }

    public ArrayList<String> getTags() {
        return tags;
    }

    public void setTags(ArrayList<String> tags) {
        this.tags = tags;
    }

    public String getPalabra() {
        return palabra;
    }

    public void setPalabra(String palabra) {
        this.palabra = palabra;
    }
}
