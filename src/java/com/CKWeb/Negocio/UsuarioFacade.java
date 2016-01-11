/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.CKWeb.Negocio;

import com.CKWeb.Entitys.Pregunta;
import com.CKWeb.Entitys.Usuario;
import com.CKWeb.Exceptions.CKWebException;
import java.util.ArrayList;
import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

/**
 * Esta clase permite eñ manejo de los objetos encontrados en la base de datos
 * así como también, la parte logica de la utilización de la entidad.
 *
 * @author Universidad Central
 * @version 07/08/2014
 */
@Stateless
public class UsuarioFacade extends AbstractFacade<Usuario> {

    @EJB
    private PreguntaFacade preguntaFacade;

    @PersistenceContext(unitName = "CKWeb-Gestion-ejbPU")
    private EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public UsuarioFacade() {
        super(Usuario.class);
    }

    /**
     * Este metodo permite registrar un usuario en la base de datos.
     *
     * @param usuario objeto a registrar
     * @throws CKWebException indicará el motivo por el cual no se pudo
     * registrar el objeto
     */
    public void registrar(Usuario usuario) throws CKWebException {
        usuario.setHabilitado(Boolean.TRUE);
        if (findByCedula(usuario.getCedula()) == null) {
            if (findByNickName(usuario.getNickname()) == null) {
                em.persist(usuario);
            } else {
                throw new CKWebException("NickName ya en uso");
            }
        } else {
            throw new CKWebException("Usuario existente");
        }
    }

    /**
     * Metodo para actualizar un registro en la base de datos.
     *
     * @param usuario Objeto a actualizar
     */
    public void updateUsuario(Usuario usuario) {
        em.merge(usuario);
    }

    /**
     * Metodo para recuperar la contraseña de usuario, asignando un numero al
     * azar.
     *
     * @param cedula cedula de usuario a buscar en la base de datos
     * @param pregunta objeto pregunta correspondiente a el usuario.
     * @throws CKWebException indicará la razón por la cual no se pudo completar
     * la operación
     */
    public void recuperarContraseña(String cedula, Pregunta pregunta) throws CKWebException {
        Usuario usuario = findByCedula(cedula);
        if (usuario != null) {
            Pregunta preguntaAux = preguntaFacade.findByCedula(usuario);
            if (pregunta.getRespuesta().equals(preguntaAux.getRespuesta())) {
                int contrasena = (int) Math.floor(Math.random() * (1000 - 100000 + 1) + 100000);
                SendMail sendMail = new SendMail(usuario.getCorreo(), Integer.toString(contrasena));
                usuario.setContrasena(Integer.toString(contrasena));
                em.merge(usuario);
            } else {
                throw new CKWebException("La respuesta es incorrecta");
            }
        } else {
            throw new CKWebException("Este usuario no existe");
        }
    }

    /**
     * Metodo para encontrar un registro en la base de datos
     *
     * @param cedula cedula a buscar en la base de datos
     * @return objeto encontrado en la base de datos
     */
    public Usuario findByCedula(String cedula) {
        Query q = em.createNamedQuery("Usuario.findByCedula");
        q.setParameter("cedula", cedula);
        try {
            return (Usuario) q.getSingleResult();
        } catch (NoResultException e) {
            return null;
        }
    }

    /**
     * Metodo para encontrar un registro en la base de datos
     *
     * @param nickName nickname a buscar en la base de datos
     * @return objeto encontrado en la base de datos
     */
    public Usuario findByNickName(String nickName) {
        Query q = em.createNamedQuery("Usuario.findByNickname");
        q.setParameter("nickname", nickName);
        try {
            return (Usuario) q.getSingleResult();
        } catch (NoResultException e) {
            return null;
        }
    }

    public int CountId() {
        Query q = em.createNamedQuery("Usuario.findAll");
        try {
            ArrayList<Usuario> users;
            return ((ArrayList<Usuario>) q.getResultList()).size();
        } catch (NoResultException e) {
            return 0;
        }
    }
}