/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.CKWeb.Remote;

import com.CKWeb.Entitys.Permiso;
import com.CKWeb.Entitys.Tipodeusuario;
import com.CKWeb.Exceptions.CKWebException;
import com.CKWeb.Negocio.TipodeusuarioFacade;
import javax.ejb.EJB;
import javax.ejb.Stateless;

/**
 *
 * @author user
 */
@Stateless
public class TipodeusuarioBean implements TipodeusuarioBeanRemote {

    @EJB
    private TipodeusuarioFacade tipodeusuarioFacade;

    @Override
    public boolean adicionarPermiso(Permiso permiso) {
        return tipodeusuarioFacade.adicionarPermiso(permiso);
    }

    // Add business logic below. (Right-click in editor and choose
    // "Insert Code > Add Business Method")
    @Override
    public void crearTipoDeUsuairo(Tipodeusuario tipodeusuario) throws CKWebException {
        tipodeusuarioFacade.crearTipoDeUsuairo(tipodeusuario);
    }

    @Override
    public void updatePermiso(Tipodeusuario tipousuario) {
        tipodeusuarioFacade.updatePermiso(tipousuario);
    }

    @Override
    public Tipodeusuario findById(int id) {
        return tipodeusuarioFacade.findById(id);
    }

    @Override
    public Tipodeusuario findByName(String nombre) {
        return tipodeusuarioFacade.findByName(nombre);
    }

    @Override
    public int count() {
        return tipodeusuarioFacade.count();
    }
}
