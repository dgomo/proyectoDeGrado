/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.CKWeb.Negocio;

import com.CKWeb.Entitys.Pregunta;
import com.CKWeb.Entitys.Usuario;
import java.util.ArrayList;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

/**
 *
 * @author user
 */
@Stateless
public class PreguntaFacade extends AbstractFacade<Pregunta> {

    @PersistenceContext(unitName = "CKWeb-Gestion-ejbPU")
    private EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public PreguntaFacade() {
        super(Pregunta.class);
    }

    public void registrarPregunta(Pregunta pregunta) {
        pregunta.setId(CountId());
        em.persist(pregunta);
    }

    public Pregunta findByCedula(Usuario cedula) {
        Query q = em.createNamedQuery("Pregunta.findByCedula");
        q.setParameter("cedula", cedula);
        try {
            return (Pregunta) q.getSingleResult();
        } catch (NoResultException e) {
            return null;
        }
    }

    public int CountId() {
        Query q = em.createNamedQuery("Pregunta.findAll");
        try {
            return (q.getResultList()).size() + 1;
        } catch (NoResultException e) {
            return 1;
        }
    }
}