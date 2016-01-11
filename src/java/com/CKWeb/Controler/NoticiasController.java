/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.CKWeb.Controler;

import com.CKWebMulti.Beans.EventoBeanRemote;
import com.CKWebMulti.Entitys.Evento;
import java.io.Serializable;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import javax.ejb.EJB;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.RequestScoped;

/**
 *
 * @author user
 */
@ManagedBean
@RequestScoped
public class NoticiasController implements Serializable{

    @EJB
    private EventoBeanRemote eventoBean;
    private ArrayList<Evento> busqueda = new ArrayList<Evento>();
    private ArrayList<Evento> lateral = new ArrayList<Evento>();

    /**
     * Creates a new instance of NoticiasController
     */
    public NoticiasController() {
    }

    public void findByDate() {
        busqueda = eventoBean.findByFecha(null);
        Collections.reverse(busqueda);
        lateral.add(busqueda.get(0));
        if (busqueda.size() >= 2) {
            lateral.add(busqueda.get(1));
        }
    }

    public String formatDate(Date date) {
        SimpleDateFormat formateador = new SimpleDateFormat("dd 'de' MMMM 'del' yyyy");
        return formateador.format(date);
    }

    public String formatDescripcion(String word) {
        String arr[] = word.split(" ");
        String ans = "";
        if (arr.length >= 15) {
            for (int i = 0; i < 15; i++) {
                ans += arr[i] + " ";
            }
            ans += "...";
        } else {
            ans = word;
        }
        return ans;
    }

    public ArrayList<Evento> getResultados() {
        return busqueda;
    }

    public void setResultados(ArrayList<Evento> resultados) {
        this.busqueda = resultados;
    }

    public ArrayList<Evento> getLateral() {
        return lateral;
    }

    public void setLateral(ArrayList<Evento> lateral) {
        this.lateral = lateral;
    }
}