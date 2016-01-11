/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.CKWebMulti.Beans;

import com.CKWebMulti.Entitys.Tema;
import com.CKWebMulti.Exceptions.CKWebException;
import com.CKWebMulti.Negocio.TemaFacade;
import java.util.ArrayList;
import javax.ejb.EJB;
import javax.ejb.Stateless;

/**
 *
 * @author USER
 */
@Stateless
public class TemaBean implements TemaBeanRemote {

    @EJB
    private TemaFacade temaFacade;

    
    /*@Override
    public void registrar(Tema tema) throws CKWebException {
        temaFacade.registrar(tema);
    }*/

    // Add business logic below. (Right-click in editor and choose
    // "Insert Code > Add Business Method")

    @Override
    public Tema findByNombre(String nombre) {
        return temaFacade.findByNombre(nombre);
    }

    @Override
    public ArrayList findByTag(String tagPalabra) {
        return temaFacade.findByTag(tagPalabra);
    }

    @Override
    public ArrayList findAll() {
        return temaFacade.findAll();
    }

    @Override
    public int registrar(Tema tema,ArrayList<String> palabras) throws CKWebException {
        return temaFacade.registrar(tema,palabras);
    }

    @Override
    public void actualizarTema(Tema tema) {
        temaFacade.actualizarTema(tema);
    }
    
    
    
}
