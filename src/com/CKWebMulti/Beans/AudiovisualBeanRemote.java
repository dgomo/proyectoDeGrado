/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.CKWebMulti.Beans;

import com.CKWebMulti.Entitys.Audiovisual;
import com.CKWebMulti.Entitys.Tema;
import com.CKWebMulti.Entitys.Tag;
import com.CKWebMulti.Exceptions.CKWebException;
import java.util.ArrayList;
import java.util.Date;
import javax.ejb.Remote;

/**
 *
 * @author USER
 */
@Remote
public interface AudiovisualBeanRemote {

    com.CKWebMulti.Entitys.Audiovisual findByNombre(String nombre);

    ArrayList findByRankDate(Date topeInferior, Date topeSuperior);

    ArrayList findByAutor(String cedula);

    ArrayList findByTag(String tagPalabra);

    ArrayList findByTema(Tema tema);

    ArrayList ultimosSeis();

    void registrarAudiovisual(Audiovisual audiovisual, ArrayList tags, Tema temas) throws CKWebException;

    void actualizarAudiovisual(Audiovisual audiovisual);

    Audiovisual findById(String id);

    ArrayList findByMes(int mes, int year);

}
