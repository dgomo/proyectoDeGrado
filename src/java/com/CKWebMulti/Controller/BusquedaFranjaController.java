/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.CKWebMulti.Controller;

import com.CKWebMulti.Beans.AudiovisualBeanRemote;
import com.CKWebMulti.Beans.TemaBeanRemote;
import com.CKWebMulti.Entitys.Audiovisual;
import com.CKWebMulti.Entitys.Tema;
import java.io.IOException;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
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
public class BusquedaFranjaController implements Serializable {
    @EJB
    private TemaBeanRemote temaBean;

    @EJB
    private AudiovisualBeanRemote audiovisualBean;
    
    

    /**
     * Creates a new instance of BusquedaFranjaController
     */
    private Tema tema;
    private String nombre;
    private int num = 0;
    private ArrayList<Audiovisual> resultados = new ArrayList<Audiovisual>();

    public BusquedaFranjaController() {
        setNum(0);
    }

    public String redirigir(Tema tema) {
        System.out.println("Nombre: "+tema.getNombre());
        this.tema = new Tema();
        this.tema = tema;
        cargar();
        return "faces/franjas.xhtml";
    }
    
    public void actualizarAudiovisual(){
        try {
            tema.setNombre(nombre);
            temaBean.actualizarTema(tema);
            FacesContext context = FacesContext.getCurrentInstance();
            context.getExternalContext().redirect(context.getExternalContext().getRequestContextPath()+"/faces/franjas.xhtml");
        } catch (IOException ex) {
            Logger.getLogger(BusquedaFranjaController.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
    public void cargar() {
        resultados.clear();
        ArrayList<Audiovisual> audiovisuales = new ArrayList<Audiovisual>();
        audiovisuales = audiovisualBean.findByTema(tema);
        Collections.sort(audiovisuales, new Comparator<Audiovisual>() {
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
        Collections.reverse(audiovisuales);
        if ((audiovisuales.size() / (num + 5)) > 0) {
            for (int i = num; i < num + 5; i++) {
                resultados.add(audiovisuales.get(i));
            }
        } else {
            for (int i = num; i < audiovisuales.size(); i++) {
                resultados.add(audiovisuales.get(i));
            }
        }
    }

    public String paginarSig() {
        ArrayList<Audiovisual> audiovisuales = new ArrayList<Audiovisual>();
        audiovisuales = audiovisualBean.findByTema(tema);
        if (num + 5 < audiovisuales.size()) {
            setNum(num + 5);
        }
        cargar();
        return "faces/franjas.xhtml";
    }

    public String paginarAnt() {
        if ((num - 5) >= 0) {
            setNum(num - 5);
        }
        cargar();
        return "faces/franjas.xhtml";
    }

    public Tema getTema() {
        return tema;
    }

    public void setTema(Tema tema) {
        this.tema = tema;
    }

    public int getNum() {
        return num;
    }

    public void setNum(int num) {
        this.num = num;
    }

    public ArrayList<Audiovisual> getResultados() {
        return resultados;
    }

    public void setResultados(ArrayList<Audiovisual> resultados) {
        this.resultados = resultados;
    }

    public String getNombre() {
        nombre=tema.getNombre();
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    
}