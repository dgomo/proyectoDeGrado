/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.CKWebMulti.Controller;

//import com.CKWebMulti.ControllerStream.EventCreateWebService_Service;
import com.CKWeb.Controler.AudioVisualController;
import com.CKWeb.ControllerStreaming.CreateEvent_Service;
import com.CKWeb.Entitys.Usuario;
import com.CKWeb.Remote.UsuarioBeanRemote;
import com.CKWebMulti.Beans.AudiovisualBeanRemote;
import com.CKWebMulti.Beans.TemaBeanRemote;
import com.CKWebMulti.Entitys.Audiovisual;
import com.CKWebMulti.Entitys.Tag;
import com.CKWebMulti.Entitys.Tema;
import com.CKWebMulti.Exceptions.CKWebException;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
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
import javax.xml.datatype.DatatypeConfigurationException;
import javax.xml.datatype.DatatypeFactory;
import javax.xml.datatype.XMLGregorianCalendar;
import javax.xml.ws.WebServiceRef;

/**
 *
 * @author USER
 */
@ManagedBean
@SessionScoped
public class StreamingController implements Serializable{

    @EJB
    private TemaBeanRemote temaBean;
    @EJB
    private com.CKWebMulti.Beans.UsuarioBeanRemote usuarioBean;
    @EJB
    private AudiovisualBeanRemote audiovisualBean;
    @WebServiceRef(wsdlLocation = "WEB-INF/wsdl/localhost_8080/SampleCKW-Maven/createEvent.wsdl")
    private CreateEvent_Service service;

    //@WebServiceRef(wsdlLocation = "WEB-INF/wsdl/localhost_8080/EventCreateWebService/EventCreateWebService.wsdl")
    //private EventCreateWebService_Service service;
    private String palabra;
    private String titulo;
    private String descripcion;
    private Date date;
    private String state;
    private String fecha;
    private Audiovisual audiovisual;
    private ArrayList<Tema> temasRelacion = new ArrayList<Tema>();
    private ArrayList<String> tagRelacion = new ArrayList<String>();
    private Tema tema;

    private ArrayList<Tag> tags = new ArrayList<Tag>();

    /**
     * Creates a new instance of StreamingController
     */
    public StreamingController() {
        audiovisual = new Audiovisual();
        date = new Date();
        tema = null;
        state = "no";
    }

    public void findAll() {
        temasRelacion = temaBean.findAll();
    }

    private String crearEvento() {
        // Note that the injected javax.xml.ws.Service reference as well as port objects are not thread safe.
        // If the calling of port operations may lead to race condition some synchronization is required.
        String patron = "20[0-9][0-9]-[0-1][0-9]-[0-3][0-9]";
        Pattern pat = Pattern.compile(patron);
        Matcher mat = pat.matcher(fecha);
        System.out.println("fecha: " + fecha);
        if (!mat.matches()) {
            FacesContext.getCurrentInstance().addMessage("messages", new FacesMessage("Formato de fecha incorrecto"));
            return "/ckw/eventLive";
        } else {
            findByDate();
            System.out.println("Date: " + date);
            GregorianCalendar gregory = new GregorianCalendar();
            gregory.setTime(new Date());
            XMLGregorianCalendar calendar;
            try {
                calendar = DatatypeFactory.newInstance().newXMLGregorianCalendar(gregory);
                System.out.println("Calendar: " + calendar.getDay());
                com.CKWeb.ControllerStreaming.CreateEvent port = service.getCreateEventPort();
                return port.createEvent(titulo, descripcion, fecha, state);
            } catch (DatatypeConfigurationException ex) {
                Logger.getLogger(StreamingController.class.getName()).log(Level.SEVERE, null, ex);
                return null;
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
        date = nuevaFecha;
    }

    public void crearEventoLlamar() {
        audiovisual.setNombre(titulo);
        audiovisual.setDescripcion(descripcion);
        audiovisual.setFecha(date);
        String url = crearEvento();
        System.out.println("Retorno: " + url);
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
            FacesContext.getCurrentInstance().addMessage("messages", new FacesMessage("Audiovisual creado"));
        } catch (CKWebException ex) {
            Logger.getLogger(AudioVisualController.class.getName()).log(Level.SEVERE, null, ex);
            FacesContext.getCurrentInstance().addMessage("messages", new FacesMessage("Audiovisual no creado"));
        }
    }

    public void addTag() {
        Tag tag;
        String words[] = palabra.split(", ");
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

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getFecha() {
        return fecha;
    }

    public void setFecha(String fecha) {
        this.fecha = fecha;
    }

    public Audiovisual getAudiovisual() {
        return audiovisual;
    }

    public void setAudiovisual(Audiovisual audiovisual) {
        this.audiovisual = audiovisual;
    }

    public String getPalabra() {
        return palabra;
    }

    public void setPalabra(String palabra) {
        this.palabra = palabra;
    }

    public ArrayList<Tema> getTemasRelacion() {
        findAll();
        return temasRelacion;
    }

    public void setTemasRelacion(ArrayList<Tema> temasRelacion) {
        this.temasRelacion = temasRelacion;
    }

    public Tema getTema() {
        return tema;
    }

    public void setTema(Tema tema) {
        this.tema = tema;
    }

    public ArrayList<Tag> getTags() {
        return tags;
    }

    public void setTags(ArrayList<Tag> tags) {
        this.tags = tags;
    }

    public ArrayList<String> getTagRelacion() {
        return tagRelacion;
    }

    public void setTagRelacion(ArrayList<String> tagRelacion) {
        this.tagRelacion = tagRelacion;
    }

    private String createEvent(java.lang.String arg0, java.lang.String arg1, java.lang.String arg2, java.lang.String arg3) {
        // Note that the injected javax.xml.ws.Service reference as well as port objects are not thread safe.
        // If the calling of port operations may lead to race condition some synchronization is required.
        com.CKWeb.ControllerStreaming.CreateEvent port = service.getCreateEventPort();
        return port.createEvent(arg0, arg1, arg2, arg3);
    }
}
