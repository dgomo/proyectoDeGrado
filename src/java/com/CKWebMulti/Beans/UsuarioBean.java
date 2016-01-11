/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.CKWebMulti.Beans;

import com.CKWebMulti.Entitys.Usuario;
import com.CKWebMulti.Negocio.UsuarioFacade;
import javax.ejb.EJB;
import javax.ejb.Stateless;

/**
 *
 * @author user
 */
@Stateless
public class UsuarioBean implements UsuarioBeanRemote {
    @EJB
    private UsuarioFacade usuarioFacade;

    @Override
    public Usuario findByCedula(String cedula) {
        return usuarioFacade.findByCedula(cedula);
    }
    
    // Add business logic below. (Right-click in editor and choose
    // "Insert Code > Add Business Method")
}
