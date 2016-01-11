/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.CKWeb.Negocio;

import com.CKWeb.Entitys.Recursos;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

/**
 *
 * @author USER
 */
@Stateless
public class RecursosFacade extends AbstractFacade<Recursos> {

    @PersistenceContext(unitName = "CKWeb-Gestion-ejbPU")
    private EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public RecursosFacade() {
        super(Recursos.class);
    }

    public Recursos findById(int id) {
        Query q = em.createNamedQuery("Recursos.findById");
        q.setParameter("id", id);
        try {
            return (Recursos) q.getSingleResult();
        } catch (NoResultException e) {
            return null;
        }
    }

    public Recursos findByName(String nombre) {
        Query q = em.createNamedQuery("Recursos.findByNombre");
        q.setParameter("nombre", nombre);
        try {
            return (Recursos) q.getSingleResult();
        } catch (NoResultException e) {
            return null;
        }
    }
}