/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.CKWebMulti.Negocio;

import com.CKWebMulti.Entitys.Audiovisual;
import com.CKWebMulti.Entitys.Tag;
import com.CKWebMulti.Entitys.Tema;
import com.CKWebMulti.Exceptions.CKWebException;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collections;
import java.util.Date;
import java.util.Locale;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.LockModeType;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

/**
 *
 * @author UCENTRAL
 */
@Stateless
public class AudiovisualFacade extends AbstractFacade<Audiovisual> {

    @PersistenceContext(unitName = "CKWeb-Contenido-ejbPU")
    private EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public AudiovisualFacade() {
        super(Audiovisual.class);
    }

    public Audiovisual findById(String id) {
        Query q = em.createNamedQuery("Audiovisual.findByIdaudiovisual");
        try {
            q.setParameter("idaudiovisual", Integer.parseInt(id));
            return (Audiovisual) q.getSingleResult();
        } catch (NoResultException e) {
            return null;
        } catch (NumberFormatException e) {
            return null;
        }
    }

    public void registrarAudiovisual(Audiovisual audiovisual, ArrayList<String> tags, Tema temas) throws CKWebException {
        System.out.println("LLegoooooo " + temas.getNombre());
        ArrayList<Tag> newTags = new ArrayList<Tag>();

        for (int i = 0; i < tags.size(); i++) {
            Tag tag = new Tag();
            tag.setPalabra(tags.get(i));
            newTags.add(tag);
        }
        /*for (int i = 0; i < newTags.size(); i++) {
         System.out.println("tag " + newTags.get(i).getPalabra());
         }*/
        if (findByNombre(audiovisual.getNombre()) == null) {
            Tag auxTag;
            audiovisual.setTagCollection(newTags);
            for (int i = 0; i < newTags.size(); i++) {
                auxTag = newTags.get(i);
                auxTag.setIdaudiovisual(audiovisual);
                em.persist(auxTag);
            }
            ArrayList<Tema> newTemas = new ArrayList<Tema>();
            ArrayList<Audiovisual> newAudiovisual = new ArrayList<Audiovisual>();
            newTemas.add(temas);
            newAudiovisual.add(audiovisual);
            temas.setAudiovisualCollection(newAudiovisual);
            audiovisual.setTemaCollection(newTemas);
            em.persist(audiovisual);
        } else {
            throw new CKWebException("Nombre Duplicado");
        }
    }

    public Audiovisual findByNombre(String nombre) {
        Query q = em.createNamedQuery("Audiovisual.findByNombre");
        q.setParameter("nombre", nombre);
        try {
            return (Audiovisual) q.getSingleResult();
        } catch (NoResultException e) {
            return null;
        }
    }

    public ArrayList<Audiovisual> findByRankDate(Date topeInferior, Date topeSuperior) {
        Query q = em.createNamedQuery("Audiovisual.findAll");
        try {
            ArrayList<Audiovisual> datos = new ArrayList<Audiovisual>(q.getResultList());
            ArrayList<Audiovisual> procesados = new ArrayList<Audiovisual>();
            for (Audiovisual dato : datos) {
                if (dato.getFecha().after(topeInferior) && dato.getFecha().before(topeSuperior)) {
                    procesados.add(dato);
                }
            }
            return procesados;
        } catch (NoResultException e) {
            return null;
        }
    }

    public ArrayList<Audiovisual> findByAutor(String cedula) {
        Query q = em.createNamedQuery("Audiovisual.findByCedula");
        try {
            return new ArrayList<Audiovisual>(q.getResultList());
        } catch (NoResultException e) {
            return null;
        }
    }

    public ArrayList<Audiovisual> findByTag(String tagPalabra) {
        Query q = em.createNamedQuery("Audiovisual.findAll");
        try {
            ArrayList<Audiovisual> datos = new ArrayList<Audiovisual>(q.getResultList());
            ArrayList<Audiovisual> procesados = new ArrayList<Audiovisual>();
            //System.out.println("Tamaño datos: " + datos.size());
            for (Audiovisual a : datos) {
                ArrayList<Tag> tags = new ArrayList<Tag>(a.getTagCollection());
                for (Tag t : tags) {
                    if (t.getPalabra().equals(tagPalabra)) {
                        procesados.add(a);
                    }
                }
            }
            //System.out.println("Tamaño datos: " + procesados.size());
            return procesados;
        } catch (NoResultException e) {
            return null;
        }
    }

    public ArrayList<Audiovisual> findByTema(Tema tema) {
        Query q = em.createNamedQuery("Audiovisual.findAll");
        try {
            ArrayList<Audiovisual> datos = new ArrayList<Audiovisual>(q.getResultList());
            ArrayList<Audiovisual> procesados = new ArrayList<Audiovisual>();
            //System.out.println("Tamaño datos: " + datos.size());
            for (Audiovisual a : datos) {
                ArrayList<Tema> temas = new ArrayList<Tema>(a.getTemaCollection());
                for (Tema t : temas) {
                    if (t.getNombre().equals(tema.getNombre())) {
                        procesados.add(a);
                    }
                }
            }
            //System.out.println("Tamaño datos: " + procesados.size());
            return procesados;
        } catch (NoResultException e) {
            return null;
        }
    }

    public ArrayList<Audiovisual> ultimosSeis() {
        Query q = em.createNamedQuery("Audiovisual.findAll");
        try {
            ArrayList<Audiovisual> datos = new ArrayList<Audiovisual>(q.getResultList());
            //System.out.println("Datos: " + datos.size());
            Collections.reverse(datos);
            ArrayList<Audiovisual> procesados = new ArrayList<Audiovisual>();
            for (int i = 0; i < 6; i++) {
                procesados.add(datos.get(i));
            }
            return procesados;
        } catch (NoResultException e) {
            return null;
        }
    }

    public void actualizarAudiovisual(Audiovisual audiovisual) {
        Audiovisual audioAux = new Audiovisual();
        Query q = em.createNamedQuery("Audiovisual.findByIdaudiovisual");
        q.setParameter("idaudiovisual", audiovisual.getIdaudiovisual());
        audioAux = (Audiovisual) q.getSingleResult();
        audioAux.setNombre(audiovisual.getNombre());
        audioAux.setDescripcion(audiovisual.getDescripcion());
        audioAux.setUrl(audiovisual.getUrl());
        ArrayList<Tag> tags = new ArrayList<Tag>(audioAux.getTagCollection());
        for (int i = 0; i < tags.size(); i++) {
            em.merge(tags.get(i));
        }
        ArrayList<Tema> temas = new ArrayList<Tema>(audioAux.getTemaCollection());
        for (int i = 0; i < temas.size(); i++) {
            em.merge(temas.get(i));
        }
        em.merge(audioAux);
    }

    public ArrayList<Audiovisual> findByMes(int mes, int year) {
        Query q = em.createNamedQuery("Audiovisual.findAll");
        try {
            ArrayList<Audiovisual> arrayList = new ArrayList<Audiovisual>(q.getResultList());
            ArrayList<Audiovisual> procesados = new ArrayList<Audiovisual>();
            for (int i = 0; i < arrayList.size(); i++) {
                Calendar c = Calendar.getInstance();
                c.setTime(arrayList.get(i).getFecha());
                if (c.get(Calendar.YEAR) == year && c.get(Calendar.MONTH) + 1 == mes) {
                    procesados.add(arrayList.get(i));
                }
            }
            return procesados;
        } catch (NoResultException e) {
            return null;
        }
    }
}