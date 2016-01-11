/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.CKWeb.Controler;

import com.CKWeb.Entitys.Usuario;
import com.CKWebMulti.Beans.AudiovisualBeanRemote;
import com.CKWebMulti.Beans.TemaBeanRemote;
import com.CKWebMulti.Beans.UsuarioBeanRemote;
import com.CKWebMulti.Entitys.Audiovisual;
import com.CKWebMulti.Entitys.Tag;
import com.CKWebMulti.Entitys.Tema;
import com.CKWebMulti.Exceptions.CKWebException;
import java.io.IOException;
import java.io.Serializable;
import java.util.ArrayList;
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
import javax.faces.context.FacesContext;
import javax.servlet.http.HttpServletRequest;

/**
 *
 * @author USER
 */
@ManagedBean
@SessionScoped
public class AudioVisualController implements Serializable{

    @EJB
    private TemaBeanRemote temaBean;
    @EJB
    private UsuarioBeanRemote usuarioBean;

    @EJB
    private AudiovisualBeanRemote audiovisualBean;

    private Tema tema;

    private Audiovisual audiovisual;

    private ArrayList<Tema> temasRelacion = new ArrayList<Tema>();

    private ArrayList<Tag> tags;

    private String palabra;

    private ArrayList<Audiovisual> audiovisuales = new ArrayList<Audiovisual>();

    private ArrayList<Fila> filas = new ArrayList<Fila>();

    /**
     * Creates a new instance of AudioVisual
     */
    public AudioVisualController() {
        audiovisual = new Audiovisual();
        tags = new ArrayList<Tag>();
        tema=null;
    }

    public void ultimos() {
        audiovisuales = audiovisualBean.ultimosSeis();
        filas.clear();
        Fila f = new Fila();
        f.setAudio1(audiovisuales.get(0));
        f.setAudio2(audiovisuales.get(1));
        f.setAudio3(audiovisuales.get(2));
        filas.add(f);
        f = new Fila();
        f.setAudio1(audiovisuales.get(3));
        f.setAudio2(audiovisuales.get(4));
        f.setAudio3(audiovisuales.get(5));
        filas.add(f);
    }

    public void findAll() {
        temasRelacion = temaBean.findAll();
    }

    public void registrarAudiovisual() {
        String url = audiovisual.getUrl();
        String pattern = "(?<=watch\\?v=|/videos/|embed\\/)[^#\\&\\?]*";
        Pattern compiledPattern = Pattern.compile(pattern);
        Matcher matcher = compiledPattern.matcher(url);
        if (matcher.find()) {
            url = matcher.group();
        }
        Calendar calendario = Calendar.getInstance();
        Date date = new Date(calendario.getTimeInMillis());
        audiovisual.setFecha(date);
        FacesContext fc = FacesContext.getCurrentInstance();
        Usuario usuario = (Usuario) fc.getExternalContext().getSessionMap().get("usuario");
        audiovisual.setCedula(usuarioBean.findByCedula(usuario.getCedula()));
        audiovisual.setPeso("1");
        audiovisual.setTipo(1);
        audiovisual.setDuracion("1");
        audiovisual.setAutorizado(Boolean.TRUE);
        audiovisual.setUrl(url);
        Tag tag = new Tag();
        tag.setPalabra(audiovisual.getNombre().toLowerCase());
        tags.add(tag);
        ArrayList<Audiovisual> audios = new ArrayList<Audiovisual>();
        audios.add(audiovisual);
        tema.setAudiovisualCollection(audios);
        ArrayList<String> palabras = new ArrayList<String>();
        for (int i = 0; i < tags.size(); i++) {
            palabras.add(tags.get(i).getPalabra());
        }
        ArrayList<Tema> temas = new ArrayList<Tema>();
        temas.add(tema);
        System.out.println("URL: " + url);
        try {
            audiovisualBean.registrarAudiovisual(audiovisual, palabras, tema);
            tags.clear();
            FacesContext.getCurrentInstance().addMessage("messages", new FacesMessage("Audiovisual creado"));
            FacesContext context = FacesContext.getCurrentInstance();
            context.getExternalContext().redirect(context.getExternalContext().getRequestContextPath()+"/home");
        } catch (CKWebException ex) {
            Logger.getLogger(AudioVisualController.class.getName()).log(Level.SEVERE, null, ex);
            FacesContext.getCurrentInstance().addMessage("messages", new FacesMessage("Audiovisual no creado"));
        } catch (IOException ex) {
            Logger.getLogger(AudioVisualController.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    public void addTag() {
        Tag tag;
        String words[] = palabra.split(",");
        for (int i = 0; i < words.length; i++) {
            boolean ban = true;
            for (int j = 0; j < tags.size(); j++) {
                if (words[i] == tags.get(j).getPalabra()) {
                    ban = false;
                }
            }
            if (ban) {
                tag = new Tag();
                tag.setPalabra(words[i].toLowerCase());
                tags.add(tag);
            }
        }
    }

    public void actualizarAudiovisual() {
        audiovisualBean.actualizarAudiovisual(audiovisual);
    }

    public Audiovisual getAudiovisual() {
        return audiovisual;
    }

    public void setAudiovisual(Audiovisual audiovisual) {
        this.audiovisual = audiovisual;
    }

    public ArrayList<Tag> getTags() {
        return tags;
    }

    public void setTags(ArrayList<Tag> tags) {
        this.tags = tags;
    }

    public String getPalabra() {
        return palabra;
    }

    public void setPalabra(String palabra) {
        this.palabra = palabra;
    }

    public Tema getTema() {
        return tema;
    }

    public void setTema(Tema tema) {
        this.tema = tema;
    }

    public ArrayList<Tema> getTemasRelacion() {
        findAll();
        return temasRelacion;
    }

    public void setTemasRelacion(ArrayList<Tema> temasRelacion) {
        this.temasRelacion = temasRelacion;
    }

    public ArrayList<Audiovisual> getAudiovisuales() {
        ultimos();
        return audiovisuales;
    }

    public void setAudiovisuales(ArrayList<Audiovisual> audiovisuales) {
        this.audiovisuales = audiovisuales;
    }

    public ArrayList<Fila> getFilas() {
        ultimos();
        return filas;
    }

    public void setFilas(ArrayList<Fila> filas) {
        this.filas = filas;
    }

}