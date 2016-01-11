/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.CKWeb.Remote;

import com.CKWeb.Entitys.Permiso;
import com.CKWeb.Entitys.Tipodeusuario;
import javax.ejb.Remote;

/**
 *
 * @author user
 */
@Remote
public interface PermisoBeanRemote {

    java.util.Vector<Permiso> findAllById(Tipodeusuario tipo);

    int count();

}
