/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.CKWeb.Remote;

import com.CKWeb.Entitys.Pregunta;
import com.CKWeb.Entitys.Usuario;
import com.CKWeb.Exceptions.CKWebException;
import com.CKWeb.Negocio.UsuarioFacade;
import javax.ejb.EJB;
import javax.ejb.Stateless;

/**
 *
 * @author USER
 */
@Stateless
public class UsuarioBean implements UsuarioBeanRemote {

    @EJB
    private UsuarioFacade usuarioFacade;

    @Override
    public void registrar(Usuario usuario) throws CKWebException {
        usuarioFacade.registrar(usuario);
    }

    // Add business logic below. (Right-click in editor and choose
    // "Insert Code > Add Business Method")
    @Override
    public void updateUsuario(Usuario usuario) {
        usuarioFacade.updateUsuario(usuario);
    }

    @Override
    public void recuperarContraseña(String cedula, Pregunta pregunta) throws CKWebException {
        usuarioFacade.recuperarContraseña(cedula, pregunta);
    }

    @Override
    public Usuario findByCedula(String cedula) {
        return usuarioFacade.findByCedula(cedula);
    }

    @Override
    public Usuario findByNickName(String nickName) {
        return usuarioFacade.findByNickName(nickName);
    }

    @Override
    public int CountId() {
        return usuarioFacade.CountId();
    }
}
