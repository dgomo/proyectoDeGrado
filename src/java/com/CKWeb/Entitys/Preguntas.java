/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.CKWeb.Entitys;

/**
 *
 * @author user
 */
public enum Preguntas {

    P1("¿Lugar de nacimiento?"),
    P2("¿Nombre de la primera mascota?"),
    P3("¿Lugar de nacimiento de la madre?");

    private final String label;

    private Preguntas(String label) {
        this.label = label;
    }

    public String getLabel() {
        return label;
    }

}
