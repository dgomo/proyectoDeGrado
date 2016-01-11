/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.CKWeb.Remote;

import com.CKWeb.Entitys.Pregunta;
import com.CKWeb.Entitys.Usuario;
import javax.ejb.Remote;

/**
 *
 * @author user
 */
@Remote
public interface PreguntaBeanRemote {

    void registrarPregunta(Pregunta pregunta);

    Pregunta findByCedula(Usuario cedula);

    int CountId();
    
}
