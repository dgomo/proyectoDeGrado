/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.CKWebMulti.Negocio;

import com.CKWebMulti.Entitys.Evento;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import com.CKWebMulti.Exceptions.CKWebException;
import java.util.ArrayList;
import java.util.Date;
import java.util.StringTokenizer;
import javax.persistence.NoResultException;
import javax.persistence.Query;

/**
 *
 * @author USER
 */
@Stateless
public class EventoFacade extends AbstractFacade<Evento> {

    @PersistenceContext(unitName = "CKWeb-Contenido-ejbPU")
    private EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public EventoFacade() {
        super(Evento.class);
    }

    public void registrarEvento(Evento evento) throws CKWebException {
        em.persist(evento);

    }

    public ArrayList<Evento> findByFecha(Date date) {
        Query q = em.createNamedQuery("Evento.findAll");
        try {
            return new ArrayList<Evento>(q.getResultList());
        } catch (NoResultException e) {
            return null;
        }
    }

    public void actualizarEvento(Evento evento) {
        em.merge(evento);
    }
}