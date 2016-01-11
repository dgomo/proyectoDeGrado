/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.CKWeb.Controler;

import com.CKWebMulti.Entitys.Audiovisual;

/**
 *
 * @author USER
 */
public class Fila {

    private Audiovisual audio1;
    private Audiovisual audio2;
    private Audiovisual audio3;

    public Fila() {
        audio1 = new Audiovisual();
        audio2 = new Audiovisual();
        audio3 = new Audiovisual();
    }

    public Audiovisual getAudio1() {
        return audio1;
    }

    public void setAudio1(Audiovisual audio1) {
        this.audio1 = audio1;
    }

    public Audiovisual getAudio2() {
        return audio2;
    }

    public void setAudio2(Audiovisual audio2) {
        this.audio2 = audio2;
    }

    public Audiovisual getAudio3() {
        return audio3;
    }

    public void setAudio3(Audiovisual audio3) {
        this.audio3 = audio3;
    }

}