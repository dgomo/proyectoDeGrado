/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.CKWeb.Controler;

import com.CKWebMulti.Beans.EventoBeanRemote;
import com.CKWebMulti.Entitys.Evento;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.RequestScoped;
import java.io.FileNotFoundException;
import java.io.Serializable;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Date;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.ejb.EJB;
import javax.faces.context.FacesContext;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.transform.TransformerConfigurationException;
import javax.xml.transform.TransformerException;
import org.jespxml.JespXML;
import org.jespxml.modelo.Atributo;
import org.jespxml.modelo.Tag;

/**
 *
 * @author Personal
 */
//@ManagedBean
//@RequestScoped
public class CalendarioController implements Serializable {

    @EJB
    private EventoBeanRemote eventoBean;

    /**
     * Creates a new instance of CalendarioController
     */
    public CalendarioController() {
    }

    public void escribirXML() {
        try {
            JespXML archivo = new JespXML("C:/CKWEB/trunk/CKWeb-War/web/calendario.xml");
            Tag bd = new Tag("calendario");
            ArrayList<Evento> vec = eventoBean.findByFecha(null);
            for (int i = 0; i < vec.size(); i++) {
                Tag cliente = new Tag("cita");
                cliente.addAtributo("fecha", formatFecha(vec.get(i).getFecha()));
                cliente.addAtributo("titulo", vec.get(i).getNombre());
                cliente.addAtributo("descripcion", "La mejor información en CKWEB, No te pierdas el evento:  " + vec.get(i).getNombre());
                bd.addTagHijo(cliente);
            }
            archivo.escribirXML(bd);
        } catch (ParserConfigurationException ex) {
            Logger.getLogger(CalendarioController.class.getName()).log(Level.SEVERE, null, ex);
        } catch (TransformerConfigurationException ex) {
            Logger.getLogger(CalendarioController.class.getName()).log(Level.SEVERE, null, ex);
        } catch (FileNotFoundException ex) {
            Logger.getLogger(CalendarioController.class.getName()).log(Level.SEVERE, null, ex);
        } catch (TransformerException ex) {
            Logger.getLogger(CalendarioController.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    public String formatFecha(Date date) {
        DateFormat fechaHora = new SimpleDateFormat("dd-MM-yyyy");
        String fecha = fechaHora.format(date);
        String ans = "";
        String nums[] = fecha.split("-");
        if (nums[0].charAt(0) == '0') {
            ans += nums[0].charAt(1) + "-";
        } else {
            ans += nums[0] + "-";
        }
        if (nums[1].charAt(0) == '0') {
            ans += nums[1].charAt(1) + "-";
        } else {
            ans += nums[1] + "-";
        }
        ans += nums[2];
        return ans;
    }
}