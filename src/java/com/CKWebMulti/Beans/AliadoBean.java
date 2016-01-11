/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.CKWebMulti.Beans;

import com.CKWebMulti.Entitys.Aliado;
import com.CKWebMulti.Exceptions.CKWebException;
import com.CKWebMulti.Negocio.AliadoFacade;
import java.util.ArrayList;
import javax.ejb.EJB;
import javax.ejb.Stateless;

/**
 *
 * @author Personal
 */
@Stateless
public class AliadoBean implements AliadoBeanRemote {

    @EJB
    private AliadoFacade aliadoFacade;

    @Override
    public void registrar(Aliado aliado) throws CKWebException {
        aliadoFacade.registrar(aliado);
    }

    // Add business logic below. (Right-click in editor and choose
    // "Insert Code > Add Business Method")
    @Override
    public ArrayList findAll() {
        return aliadoFacade.findAll();
    }

}