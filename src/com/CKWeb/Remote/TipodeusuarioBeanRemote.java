/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.CKWeb.Remote;

import com.CKWeb.Entitys.Permiso;
import com.CKWeb.Entitys.Tipodeusuario;
import com.CKWeb.Exceptions.CKWebException;
import javax.ejb.Remote;

/**
 *
 * @author user
 */
@Remote
public interface TipodeusuarioBeanRemote {

    boolean adicionarPermiso(Permiso permiso);

    void crearTipoDeUsuairo(Tipodeusuario tipodeusuario) throws CKWebException;

    void updatePermiso(Tipodeusuario tipousuario);

    Tipodeusuario findById(int id);

    Tipodeusuario findByName(String nombre);

    int count();
    
}
