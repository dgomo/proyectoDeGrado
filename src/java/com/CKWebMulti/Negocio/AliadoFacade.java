/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.CKWebMulti.Negocio;

import com.CKWebMulti.Entitys.Aliado;
import com.CKWebMulti.Exceptions.CKWebException;
import java.util.ArrayList;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

/**
 *
 * @author Personal
 */
@Stateless
public class AliadoFacade extends AbstractFacade<Aliado> {

    @PersistenceContext(unitName = "CKWeb-Contenido-ejbPU")
    private EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public AliadoFacade() {
        super(Aliado.class);
    }

    public void registrar(Aliado aliado) throws CKWebException {
        em.persist(aliado);
    }

    public ArrayList<Aliado> findAll() {
        Query q = em.createNamedQuery("Aliado.findAll");
        try {
            return new ArrayList<Aliado>(q.getResultList());
        } catch (NoResultException e) {
            return null;
        }
    }
}