/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.CKWeb.Remote;

import com.CKWeb.Entitys.Permiso;
import com.CKWeb.Entitys.Tipodeusuario;
import com.CKWeb.Negocio.PermisoFacade;
import javax.ejb.EJB;
import javax.ejb.Stateless;

/**
 *
 * @author user
 */
@Stateless
public class PermisoBean implements PermisoBeanRemote {

    @EJB
    private PermisoFacade permisoFacade;

    @Override
    public java.util.Vector<Permiso> findAllById(Tipodeusuario tipo) {
        return permisoFacade.findAllById(tipo);
    }

    // Add business logic below. (Right-click in editor and choose
    // "Insert Code > Add Business Method")
    @Override
    public int count() {
        return permisoFacade.count();
    }
}
