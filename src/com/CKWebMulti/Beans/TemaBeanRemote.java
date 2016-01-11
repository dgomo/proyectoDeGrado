/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.CKWebMulti.Beans;

import com.CKWebMulti.Entitys.Tema;
import com.CKWebMulti.Exceptions.CKWebException;
import java.util.ArrayList;
import javax.ejb.Remote;

/**
 *
 * @author USER
 */
@Remote
public interface TemaBeanRemote {

    Tema findByNombre(String nombre);

    ArrayList findByTag(String tagPalabra);

    ArrayList findAll();

    int registrar(Tema tema,ArrayList<String> palabras) throws CKWebException;

    void actualizarTema(Tema tema);

}
