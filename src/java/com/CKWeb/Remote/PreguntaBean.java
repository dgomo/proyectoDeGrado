/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.CKWeb.Remote;

import com.CKWeb.Entitys.Pregunta;
import com.CKWeb.Entitys.Usuario;
import com.CKWeb.Negocio.PreguntaFacade;
import javax.ejb.EJB;
import javax.ejb.Stateless;

/**
 *
 * @author user
 */
@Stateless
public class PreguntaBean implements PreguntaBeanRemote {

    @EJB
    private PreguntaFacade preguntaFacade;

    @Override
    public void registrarPregunta(Pregunta pregunta) {
        preguntaFacade.registrarPregunta(pregunta);
    }

    // Add business logic below. (Right-click in editor and choose
    // "Insert Code > Add Business Method")
    @Override
    public Pregunta findByCedula(Usuario cedula) {
        return preguntaFacade.findByCedula(cedula);
    }

    @Override
    public int CountId() {
        return preguntaFacade.CountId();
    }
}
