/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.CKWebMulti.Negocio;

import com.CKWebMulti.Entitys.Tag;
import com.CKWebMulti.Entitys.Tema;
import com.CKWebMulti.Exceptions.CKWebException;
import java.util.ArrayList;
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
public class TemaFacade extends AbstractFacade<Tema> {

    @PersistenceContext(unitName = "CKWeb-Contenido-ejbPU")
    private EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public TemaFacade() {
        super(Tema.class);
    }

    public int registrar(Tema tema, ArrayList<String> palabras) throws CKWebException {
        System.out.println("llegooooooo");
        ArrayList<Tag> tags = new ArrayList<Tag>();
        for (int i = 0; i < palabras.size(); i++) {
            Tag tag = new Tag();
            tag.setPalabra(palabras.get(i));
            tag.setIdtema(tema);
            tags.add(tag);
        }
        tema.setTagCollection(tags);
        if (findByNombre(tema.getNombre()) == null) {
            ArrayList<Tag> array = new ArrayList<Tag>(tema.getTagCollection());
            for (Tag t : array) {
                t.setIdtema(tema);
                em.persist(t);
            }
            em.persist(tema);
            return 1;
        } else {
            throw new CKWebException("Nombre duplicado");
        }
    }

    public Tema findByNombre(String nombre) {
        Query q = em.createNamedQuery("Tema.findByNombre");
        q.setParameter("nombre", nombre);
        try {
            return (Tema) q.getSingleResult();
        } catch (NoResultException e) {
            return null;
        }
    }

    public ArrayList<Tema> findByTag(String tagPalabra) {
        Query q = em.createNamedQuery("Tema.findAll");
        try {
            ArrayList<Tema> datos = new ArrayList<Tema>(q.getResultList());
            ArrayList<Tema> procesados = new ArrayList<Tema>();
            for (Tema a : datos) {
                ArrayList<Tag> tags = new ArrayList<Tag>(a.getTagCollection());
                for (Tag t : tags) {
                    if (t.getPalabra().equals(tagPalabra)) {
                        procesados.add(a);
                    }
                }
            }
            return procesados;
        } catch (NoResultException e) {
            return null;
        }
    }

    @Override
    public ArrayList<Tema> findAll() {
        Query q = em.createNamedQuery("Tema.findAll");
        try {
            return new ArrayList<Tema>(q.getResultList());
        } catch (NoResultException e) {
            return null;
        }
    }
    
    public Tema findById(int id){
        Query q=em.createNamedQuery("Tema.findByIdtema");
        q.setParameter("idtema", id);
        try{
            return (Tema)q.getSingleResult();
        }catch(NoResultException e){
            return null;
        }
    }
    
    public void actualizarTema(Tema tema){
        Tema temAux=findById(tema.getIdtema());
        System.out.println("Tema nombre: "+tema.getNombre()+", temaaux nombre: "+temAux.getNombre());
        temAux.setNombre(tema.getNombre());
        ArrayList<Tag> array = new ArrayList<Tag>(temAux.getTagCollection());
        for (Tag t : array) {
            t.setIdtema(temAux);
            em.merge(t);
        }
        em.merge(temAux);
    }
    
}