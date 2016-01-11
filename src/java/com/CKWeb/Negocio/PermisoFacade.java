/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.CKWeb.Negocio;

import com.CKWeb.Entitys.Permiso;
import com.CKWeb.Entitys.Tipodeusuario;
import java.util.ArrayList;
import java.util.Vector;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

/**
 *
 * @author UCENTRAL
 */
@Stateless
public class PermisoFacade extends AbstractFacade<Permiso> {

    @PersistenceContext(unitName = "CKWeb-Gestion-ejbPU")
    private EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public PermisoFacade() {
        super(Permiso.class);
    }

    public Vector<Permiso> findAllById(Tipodeusuario tipo) {
        Query q = em.createNamedQuery("Permiso.findById");
        q.setParameter("id", tipo);
        try {
            return (Vector<Permiso>) q.getResultList();
        } catch (NoResultException e) {
            return null;
        }
    }

    @Override
    public int count() {
        Query q = em.createNamedQuery("Permiso.findAll");
        try {
            return ((Vector<Permiso>) q.getResultList()).size();
        } catch (NoResultException e) {
            return 0;
        }
    }
}