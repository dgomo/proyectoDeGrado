/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.CKWebMulti.Negocio;

import com.CKWebMulti.Entitys.Usuario;
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
public class UsuarioFacade extends AbstractFacade<Usuario> {

    @PersistenceContext(unitName = "CKWeb-Contenido-ejbPU")
    private EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public UsuarioFacade() {
        super(Usuario.class);
    }

    public Usuario findByCedula(String cedula) {
        Query q = em.createNamedQuery("Usuario.findByCedula");
        System.out.println("Checkpoint en findByCedula");
        q.setParameter("cedula", cedula);
        try {
            return (Usuario) q.getSingleResult();
        } catch (NoResultException e) {
            return null;
        }
    }
}