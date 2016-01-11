/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.CKWebMulti.Controller;

import com.CKWebMulti.Beans.AudiovisualBeanRemote;
import com.CKWebMulti.Entitys.Audiovisual;
import com.CKWebMulti.Entitys.Evento;
import java.io.IOException;
import java.io.Serializable;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
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
public class BusquedaController implements Serializable {

    @EJB
    private AudiovisualBeanRemote audiovisualBean;

    private Audiovisual audiovisual;
    private String palabra;
    private String nombre="";
    private String bandera = "";
    private String descripcion="";
    private String url="";
    private String id;
    private int num = 0;
    private ArrayList<Audiovisual> muestra = new ArrayList<Audiovisual>();

    /**
     * Creates a new instance of BusquedaController
     */
    public BusquedaController() {
        setNum(0);
        
    }

    public void findById() {
        System.out.println("ID: "+id);
        try{
            int ide=Integer.parseInt(id);
            audiovisual = audiovisualBean.findById(id);
            System.out.println("FindById "+audiovisual.getNombre());
        }catch(NumberFormatException e){
            System.out.println("Se jodio");
            System.out.println("En exception "+audiovisual.getNombre());
        }
    }

    public void actualizarAudiovisual() {
        //System.out.println("Actualizar "+audiovisual.getNombre());
        String url2 = url;
        System.err.println("Audiovisual modificado");
        String pattern = "(?<=watch\\?v=|/videos/|embed\\/)[^#\\&\\?]*";
        Pattern compiledPattern = Pattern.compile(pattern);
        Matcher matcher = compiledPattern.matcher(url);
        if (matcher.find()) {
            url = matcher.group();
        }
        System.out.println("URL: "+url);
        audiovisual.setNombre(nombre);
        audiovisual.setDescripcion(descripcion);
        audiovisual.setTagCollection(null);
        audiovisual.setUrl(url);
        audiovisualBean.actualizarAudiovisual(audiovisual);
        redireccionar(audiovisual);
    }

    public void buscar() {
        if (palabra != null && !bandera.equals(palabra)) {
            bandera = palabra;
            cargar();
            try {
                FacesContext.getCurrentInstance().getExternalContext().redirect(FacesContext.getCurrentInstance().getExternalContext().getRequestContextPath() + "/resultadosBusqueda");
            } catch (IOException ex) {
                Logger.getLogger(BusquedaController.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
    }

    public void cargar() {
        ArrayList<Audiovisual> resultados = new ArrayList<Audiovisual>();
        resultados = audiovisualBean.findByTag(palabra.toLowerCase());
        for (int i = 0; i < resultados.size(); i++) {
            resultados.get(i).setUrl(resultados.get(i).getUrl());
        }
        Collections.sort(resultados, new Comparator<Audiovisual>() {
            @Override
            public int compare(Audiovisual o1, Audiovisual o2) {
                if (o1.getFecha().before(o2.getFecha())) {
                    return -1;
                }
                if (o1.getFecha().after(o2.getFecha())) {
                    return 1;
                }
                return 0;
            }
        });
        Collections.reverse(resultados);
        if ((resultados.size() / (num + 5)) > 0) {
            for (int i = num; i < num + 5; i++) {
                muestra.add(resultados.get(i));
            }
        } else {
            for (int i = num; i < resultados.size(); i++) {
                muestra.add(resultados.get(i));
            }
        }
    }

    public void redireccionar(Audiovisual adiovisual) {
        this.audiovisual = adiovisual;
        if(audiovisual==null){
            System.out.println("Nulo.");
        }
        System.err.println("Cadena "+audiovisual.getIdaudiovisual());
        boolean bandera = true;
        for (int i = 0; i < this.audiovisual.getUrl().length(); i++) {
            if (this.audiovisual.getUrl().charAt(i) >= 48 && this.audiovisual.getUrl().charAt(i) <= 57) {
                bandera = bandera && true;
            } else {
                bandera = bandera && false;
            }
        }
        if (bandera) {
            String a = FacesContext.getCurrentInstance().getExternalContext().getRequestContextPath();
            try {
                FacesContext.getCurrentInstance().getExternalContext().redirect(a + "/watch/2/" + audiovisual.getIdaudiovisual());
            } catch (IOException ex) {
                Logger.getLogger(BusquedaController.class.getName()).log(Level.SEVERE, null, ex);
            }
        } else {
            String a = FacesContext.getCurrentInstance().getExternalContext().getRequestContextPath();
            try {
                FacesContext.getCurrentInstance().getExternalContext().redirect(a + "/watch/1/" + audiovisual.getIdaudiovisual());
            } catch (IOException ex) {
                Logger.getLogger(BusquedaController.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
    }

    public String formatDescripcion(String phrase) {
        String words[] = phrase.split(" ");
        String ans = "";
        if (words.length >= 30) {
            for (int i = 0; i < 30; i++) {
                ans += words[i] + " ";
            }
            ans += "...";
        } else {
            ans = phrase;
        }
        return ans;
    }

    public String formatDate(Date date) {
        SimpleDateFormat formateador = new SimpleDateFormat("dd 'de' MMMM 'del' yyyy");
        return formateador.format(date);
    }

    public String paginarSig() {
        ArrayList<Audiovisual> resultados = new ArrayList<Audiovisual>();
        resultados = audiovisualBean.findByTag(palabra.toLowerCase());
        if (num + 5 < resultados.size()) {
            setNum(num + 5);
        }
        muestra.clear();
        cargar();
        return "/resultadosBusqueda";
    }

    public String paginarAnt() {
        if ((num - 5) >= 0) {
            setNum(num - 5);
        }
        muestra.clear();
        cargar();
        return "/resultadosBusqueda";
    }

    public String getPalabra() {
        return palabra;
    }

    public void setPalabra(String palabra) {
        this.palabra = palabra.toLowerCase();
    }

    public Audiovisual getAudiovisual() {
        return audiovisual;
    }

    public void setAudiovisual(Audiovisual audiovisual) {
        this.audiovisual = audiovisual;
    }

    public String getNombre() {
        nombre = audiovisual.getNombre();
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        descripcion = audiovisual.getDescripcion();
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public ArrayList<Audiovisual> getMuestra() {
        return muestra;
    }

    public void setMuestra(ArrayList<Audiovisual> muestra) {
        this.muestra = muestra;
    }

    public int getNum() {
        return num;
    }

    public void setNum(int num) {
        this.num = num;
    }

    public String getUrl() {
        url=audiovisual.getUrl();
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
    
    
}