/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.CKWeb.Remote;

import com.CKWeb.Entitys.Pregunta;
import com.CKWeb.Entitys.Usuario;
import com.CKWeb.Exceptions.CKWebException;
import javax.ejb.Remote;

/**
 *
 * @author USER
 */
@Remote
public interface UsuarioBeanRemote {


    void registrar(com.CKWeb.Entitys.Usuario usuario) throws com.CKWeb.Exceptions.CKWebException;

    void updateUsuario(Usuario usuario);

    void recuperarContraseña(String cedula, Pregunta pregunta) throws CKWebException;

    Usuario findByCedula(String cedula);

    Usuario findByNickName(String nickName);

    int CountId();
    
}
