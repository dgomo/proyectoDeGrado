/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.CKWebMulti.Beans;

import com.CKWebMulti.Entitys.Evento;
import com.CKWebMulti.Exceptions.CKWebException;
import com.CKWebMulti.Negocio.EventoFacade;
import java.util.ArrayList;
import java.util.Date;
import javax.ejb.EJB;
import javax.ejb.Stateless;

/**
 *
 * @author USER
 */
@Stateless
public class EventoBean implements EventoBeanRemote {

    @EJB
    private EventoFacade eventoFacade;

    @Override
    public void registrarEvento(Evento evento) throws CKWebException {
        eventoFacade.registrarEvento(evento);
    }

    // Add business logic below. (Right-click in editor and choose
    // "Insert Code > Add Business Method")
    @Override
    public ArrayList findByFecha(Date date) {
        return eventoFacade.findByFecha(date);
    }

    @Override
    public void actualizarEvento(Evento evento) {
        eventoFacade.actualizarEvento(evento);
    }

    
    
}