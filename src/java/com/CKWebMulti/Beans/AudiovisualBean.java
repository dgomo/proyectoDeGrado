/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.CKWebMulti.Beans;

import com.CKWebMulti.Entitys.Audiovisual;
import com.CKWebMulti.Entitys.Tema;
import com.CKWebMulti.Exceptions.CKWebException;
import com.CKWebMulti.Negocio.AudiovisualFacade;
import java.util.ArrayList;
import java.util.Date;
import javax.ejb.EJB;
import javax.ejb.Stateless;

/**
 *
 * @author USER
 */
@Stateless
public class AudiovisualBean implements AudiovisualBeanRemote {
    
    @EJB
    private AudiovisualFacade audiovisualFacade;

    // Add business logic below. (Right-click in editor and choose
    // "Insert Code > Add Business Method")
    @Override
    public Audiovisual findByNombre(String nombre) {
        return audiovisualFacade.findByNombre(nombre);
    }
    
    
    
    @Override
    public ArrayList findByRankDate(Date topeInferior, Date topeSuperior) {
        return audiovisualFacade.findByRankDate(topeInferior, topeSuperior);
    }
    
    @Override
    public ArrayList findByAutor(String cedula) {
        return audiovisualFacade.findByAutor(cedula);
    }
    
    @Override
    public ArrayList findByTag(String tagPalabra) {
        return audiovisualFacade.findByTag(tagPalabra);
    }
    
    @Override
    public ArrayList findByTema(Tema tema) {
        return audiovisualFacade.findByTema(tema);
    }
    
    @Override
    public ArrayList ultimosSeis() {
        return audiovisualFacade.ultimosSeis();
    }
    
    @Override
    public void registrarAudiovisual(Audiovisual audiovisual, ArrayList tags, Tema temas) throws CKWebException {
        audiovisualFacade.registrarAudiovisual(audiovisual, tags, temas);
    }

    @Override
    public void actualizarAudiovisual(Audiovisual audiovisual) {
        audiovisualFacade.actualizarAudiovisual(audiovisual);
    }

    @Override
    public Audiovisual findById(String id) {
        return audiovisualFacade.findById(id);
    }

    @Override
    public ArrayList findByMes(int mes, int year) {
        return audiovisualFacade.findByMes(mes, year);
    }
    
    
    
}
