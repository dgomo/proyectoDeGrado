/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.CKWeb.Negocio;

import com.CKWeb.Entitys.Actividad;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

/**
 * Esta clase permite el manejo de los objetos encontrados en la base de datos
 * así como tambien, la aparte lógica de la utilización de la entidad Actividad
 *
 * @author Universidad central
 * @version 07/08/2014
 */
@Stateless
public class ActividadFacade extends AbstractFacade<Actividad> {

    @PersistenceContext(unitName = "CKWeb-Gestion-ejbPU")
    private EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public ActividadFacade() {
        super(Actividad.class);
    }

    /**
     * Este método guarada en la base de datos la actividad correspondiente
     *
     * @param actividad Objeto a guardarse
     */
    public void guardarAccion(Actividad actividad) {
        em.persist(actividad);
    }

    /**
     * Este método consulta las actividades realizadas por el usuario
     *
     * @param actividad Objeto que realizo las azcciones
     * @return Consulta si hay acciones registradas para regresarlas en la base
     * de datos
     */
    public ArrayList consultarAcciones(Actividad actividad) {
        Query q = em.createNamedQuery("Actividad.findAll");
        List<Actividad> lista;
        try {
            lista = q.getResultList();
            ArrayList<Actividad> vector = (ArrayList<Actividad>) lista;
            return vector;
        } catch (NoResultException e) {
            return null;
        }
    }
}
