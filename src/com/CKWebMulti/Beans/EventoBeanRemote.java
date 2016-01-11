/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.CKWebMulti.Beans;

import com.CKWebMulti.Entitys.Evento;
import com.CKWebMulti.Exceptions.CKWebException;
import java.util.ArrayList;
import java.util.Date;
import javax.ejb.Remote;

/**
 *
 * @author USER
 */
@Remote
public interface EventoBeanRemote {

    void registrarEvento(Evento evento) throws CKWebException;

    ArrayList findByFecha(Date date);

    void actualizarEvento(Evento evento);
    
}
