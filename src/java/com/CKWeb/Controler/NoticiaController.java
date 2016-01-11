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
import java.util.Comparator;
import java.util.Date;
import javax.ejb.EJB;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;

/**
 *
 * @author user
 */
@ManagedBean
@SessionScoped
public class NoticiaController implements Serializable {

    @EJB
    private EventoBeanRemote eventoBean;
    private Evento evento;
    private ArrayList<Evento> resultados = new ArrayList<Evento>();
    private int num = 0;

    /**
     * Creates a new instance of NoticiasController
     */
    public NoticiaController() {
        setNum(0);
    }

    public void findByDate() {
        resultados.clear();
        ArrayList<Evento> subEvento = new ArrayList<Evento>();
        subEvento = eventoBean.findByFecha(null);
        Collections.sort(subEvento, new Comparator<Evento>() {
            @Override
            public int compare(Evento o1, Evento o2) {
                if (o1.getFecha().before(o2.getFecha())) {
                    return -1;
                }
                if (o1.getFecha().after(o2.getFecha())) {
                    return 1;
                }
                return 0;
            }
        });
        Collections.reverse(subEvento);
        if ((subEvento.size() / (num + 5)) > 0) {
            for (int i = num; i < num + 5; i++) {
                resultados.add(subEvento.get(i));
            }
        } else {
            for (int i = num; i < subEvento.size(); i++) {
                resultados.add(subEvento.get(i));
            }
        }
    }

    public String actualizarNoticia() {
        eventoBean.actualizarEvento(evento);
        return "/verNoticia";
    }

    public String formatDate(Date date) {
        SimpleDateFormat formateador = new SimpleDateFormat("dd 'de' MMMM 'del' yyyy");
        return formateador.format(date);
    }

    public String formatNoticias(String phrase) {
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

    public String redireccionar(Evento evento) {
        this.evento = evento;
        return "/verNoticia";
    }

    public String paginarSig() {
        ArrayList<Evento> subEvento = new ArrayList<Evento>();
        subEvento = eventoBean.findByFecha(null);
        if (num + 5 < subEvento.size()) {
            setNum(num + 5);
        }
        return "/noticias";
    }

    public String paginarAnt() {
        if ((num - 5) >= 0) {
            setNum(num - 5);
        }
        return "/noticias";
    }

    public ArrayList<Evento> getResultados() {
        return resultados;
    }

    public void setResultados(ArrayList<Evento> resultados) {
        this.resultados = resultados;
    }

    public Evento getEvento() {
        return evento;
    }

    public void setEvento(Evento evento) {
        this.evento = evento;
    }

    public int getNum() {
        return num;
    }

    public void setNum(int num) {
        this.num = num;
    }

}