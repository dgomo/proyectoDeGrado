/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.CKWeb.Remote;

import com.CKWeb.Entitys.Pregunta;
import com.CKWeb.Entitys.Recursos;
import com.CKWeb.Negocio.RecursosFacade;
import javax.ejb.EJB;
import javax.ejb.Stateless;

/**
 *
 * @author user
 */
@Stateless
public class RecursosBean implements RecursosBeanRemote {

    @EJB
    private RecursosFacade recursosFacade;

    @Override
    public Recursos findById(int id) {
        return null;
    }

    // Add business logic below. (Right-click in editor and choose
    // "Insert Code > Add Business Method")
    @Override
    public Recursos findByName(String nombre) {
        return recursosFacade.findByName(nombre);
    }
}
