/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.CKWeb.Remote;

import com.CKWeb.Entitys.Actividad;
import com.CKWeb.Entitys.Permiso;
import com.CKWeb.Negocio.ActividadFacade;
import java.util.ArrayList;
import javax.ejb.EJB;
import javax.ejb.Stateless;

/**
 *
 * @author user
 */
@Stateless
public class ActividadBean implements ActividadBeanRemote {

    @EJB
    private ActividadFacade actividadFacade;

    @Override
    public ArrayList consultarAcciones(Actividad actividad) {
        return actividadFacade.consultarAcciones(actividad);
    }
    // Add business logic below. (Right-click in editor and choose
    // "Insert Code > Add Business Method")

    @Override
    public void guardarAccion(Actividad actividad) {
        actividadFacade.guardarAccion(actividad);
    }
}
