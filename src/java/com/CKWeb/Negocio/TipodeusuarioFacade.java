/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.CKWeb.Negocio;

import com.CKWeb.Entitys.Permiso;
import com.CKWeb.Entitys.Tipodeusuario;
import com.CKWeb.Entitys.Usuario;
import com.CKWeb.Exceptions.CKWebException;
import java.util.ArrayList;
import java.util.List;
import java.util.Vector;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

/**
 *
 * Esta clase permite el manejo de los objetos encontrados en la base de datos
 * así como tambien, la aparte lógica de la utilización de la entidad
 * TipoDeUsuario
 *
 * @author Universidad Central
 * @version 07/08/2014
 */
@Stateless
public class TipodeusuarioFacade extends AbstractFacade<Tipodeusuario> {

    @PersistenceContext(unitName = "CKWeb-Gestion-ejbPU")
    private EntityManager em;
    private ArrayList<Permiso> permisos = new ArrayList<Permiso>();

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public TipodeusuarioFacade() {
        super(Tipodeusuario.class);
    }

    /**
     * Este método adiciona permisos al abjeto TipoDeusuario correspondiente
     *
     * @param permiso permiso a adicionar
     * @return confirma si se adicionó o no el permiso
     */
    public boolean adicionarPermiso(Permiso permiso) {
        boolean ban = false;
        for (int i = 0; i < permisos.size(); i++) {
            if (permisos.get(i).getIdpermiso() == permiso.getIdpermiso()) {
                ban = true;
            }
        }
        if (!ban) {
            permisos.add(permiso);
            return true;
        }
        return false;
    }

    /**
     * Este método se serciora que el id y el nombre del usuario no exista para
     * poderlo crear con normalidad
     *
     * @param tipousuario Objeto a registrar
     * @throws CKWebException confirma si el usuario ya existe en la base de
     * datos
     */
    public void crearTipoDeUsuairo(Tipodeusuario tipousuario) throws CKWebException {

        if (findById(tipousuario.getId()) == null) {
            if (findByName(tipousuario.getNombre()) == null) {
                ArrayList<Permiso> vector = (ArrayList<Permiso>) tipousuario.getPermisoCollection();
                Permiso permiso;
                for (int i = 0; i < vector.size(); i++) {
                    permiso = vector.get(i);
                    permiso.setId(tipousuario);
                    em.persist(permiso);
                }
                em.persist(tipousuario);
            } else {
                throw new CKWebException("Este Tipo de Usuario Ya Existe.");
            }
        } else {
            throw new CKWebException("Usuario Existente");
        }
    }

    /**
     * Este método actuliza el el uruario correspondiente en la base de datos
     *
     * @param tipousuario Objeto a actualizar
     */
    public void updatePermiso(Tipodeusuario tipousuario) {
        em.merge(tipousuario);
    }

    /**
     * Este método busca si el Id del usuario ya existe dentro de la base de
     * datos
     *
     * @param id Atributo a buscar
     * @return confirma si el TipoDeUsuario ya existe o no, en nuestra base de
     * datos
     */
    public Tipodeusuario findById(int id) {
        Query q = em.createNamedQuery("Tipodeusuario.findById");
        q.setParameter("id", id);
        try {
            return (Tipodeusuario) q.getSingleResult();
        } catch (NoResultException e) {
            return null;
        }
    }

    /**
     * Este método buscar si el Nombre del usuario ya existe dentro de la base
     * de datos
     *
     * @param nombre Atributo a buscar
     * @return confirma si el TipoDeUsuario ya existe o no, es nuestra base de
     * datos
     */
    public Tipodeusuario findByName(String nombre) {
        Query q = em.createNamedQuery("Tipodeusuario.findByNombre");
        q.setParameter("nombre", nombre);
        try {
            return (Tipodeusuario) q.getSingleResult();
        } catch (NoResultException e) {
            return null;
        }
    }

    @Override
    public int count() {
        Query q = em.createNamedQuery("Tipodeusuario.findAll");
        try {
            int maxi = 0;
            Vector<Tipodeusuario> vec = (Vector<Tipodeusuario>) q.getResultList();
            for (int i = 0; i < vec.size(); i++) {
                if (vec.elementAt(i).getId() > maxi) {
                    maxi = vec.elementAt(i).getId();
                }
            }
            return maxi;
        } catch (NoResultException e) {
            return 1;
        }
    }
}