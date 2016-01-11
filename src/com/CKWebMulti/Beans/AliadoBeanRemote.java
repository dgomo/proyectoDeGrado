/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.CKWebMulti.Beans;

import com.CKWebMulti.Entitys.Aliado;
import com.CKWebMulti.Exceptions.CKWebException;
import java.util.ArrayList;
import javax.ejb.Remote;

/**
 *
 * @author Personal
 */
@Remote
public interface AliadoBeanRemote {

    void registrar(Aliado aliado) throws CKWebException;

    ArrayList findAll();

}