/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.CKWebMulti.Controller;

import com.CKWebMulti.Beans.AudiovisualBeanRemote;
import com.CKWebMulti.Entitys.Audiovisual;
import java.io.Serializable;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import javax.ejb.EJB;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.RequestScoped;
import javax.faces.bean.SessionScoped;
import javax.faces.model.SelectItem;

/**
 *
 * @author Diego Manuel
 */
@ManagedBean
@SessionScoped
public class ArchivoController implements Serializable {

    @EJB
    private AudiovisualBeanRemote audiovisualBean;

    /**
     * Creates a new instance of ArchivoController
     */
    private int year;
    private int mes;
    private SelectItem[] menuY;
    private SelectItem[] menuM;
    private ArrayList<Audiovisual> array;

    public ArchivoController() {
        Calendar c = Calendar.getInstance();
        year = c.get(Calendar.YEAR);
        mes = c.get(Calendar.MONTH);
    }

    public void consultar() {
        System.out.println(year + ":" + mes);
        ArrayList<Audiovisual> arrayList = audiovisualBean.findByMes(mes, year);
        array = arrayList;
        Collections.sort(array, new Comparator<Audiovisual>() {
            @Override
            public int compare(Audiovisual o1, Audiovisual o2) {
                if (o1.getFecha().before(o2.getFecha())) {
                    return -1;
                }
                if (o1.getFecha().after(o2.getFecha())) {
                    return 1;
                }
                return 0;
            }
        });
        Collections.reverse(array);
    }

    public void menuYear() {
        menuY = new SelectItem[5];
        Calendar c = Calendar.getInstance();
        int aux, aux2;
        aux = c.get(Calendar.YEAR);
        aux2 = aux - 4;
        for (int i = 0; i < 5; i++) {
            SelectItem selectItemO = new SelectItem();
            selectItemO.setValue(aux2);
            selectItemO.setLabel(Integer.toString(aux2));
            aux2++;
            menuY[i] = selectItemO;
        }
    }

    public void menuMes() {
        menuM = new SelectItem[12];
        SelectItem selectItem1 = new SelectItem();
        selectItem1.setValue(1);
        selectItem1.setLabel("Enero");
        menuM[0] = selectItem1;
        SelectItem selectItem2 = new SelectItem();
        selectItem2.setValue(2);
        selectItem2.setLabel("Febrero");
        menuM[1] = selectItem2;
        SelectItem selectItem3 = new SelectItem();
        selectItem3.setValue(3);
        selectItem3.setLabel("Marzo");
        menuM[2] = selectItem3;
        SelectItem selectItem4 = new SelectItem();
        selectItem4.setValue(4);
        selectItem4.setLabel("Abril");
        menuM[3] = selectItem4;
        SelectItem selectItem5 = new SelectItem();
        selectItem5.setValue(5);
        selectItem5.setLabel("Mayo");
        menuM[4] = selectItem5;
        SelectItem selectItem6 = new SelectItem();
        selectItem6.setValue(6);
        selectItem6.setLabel("Junio");
        menuM[5] = selectItem6;
        SelectItem selectItem7 = new SelectItem();
        selectItem7.setValue(7);
        selectItem7.setLabel("Julio");
        menuM[6] = selectItem7;
        SelectItem selectItem8 = new SelectItem();
        selectItem8.setValue(8);
        selectItem8.setLabel("Agosto");
        menuM[7] = selectItem8;
        SelectItem selectItem9 = new SelectItem();
        selectItem9.setValue(9);
        selectItem9.setLabel("Septiembre");
        menuM[8] = selectItem9;
        SelectItem selectItem10 = new SelectItem();
        selectItem10.setValue(10);
        selectItem10.setLabel("Octubre");
        menuM[9] = selectItem10;
        SelectItem selectItem11 = new SelectItem();
        selectItem11.setValue(11);
        selectItem11.setLabel("Noviembre");
        menuM[10] = selectItem11;
        SelectItem selectItem12 = new SelectItem();
        selectItem12.setValue(12);
        selectItem12.setLabel("Diciembre");
        menuM[11] = selectItem12;
    }

    public String formatDescripcion(String word) {
        String arr[] = word.split(" ");
        String ans = "";
        if (arr.length >= 20) {
            for (int i = 0; i < 20; i++) {
                ans += arr[i] + " ";
            }
            ans += "...";
        } else {
            ans = word;
        }
        return ans;
    }

    public String formatDate(Date date) {
        SimpleDateFormat formateador = new SimpleDateFormat("dd 'de' MMMM 'del' yyyy");
        return formateador.format(date);
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public int getMes() {
        return mes;
    }

    public void setMes(int mes) {
        this.mes = mes;
    }

    public SelectItem[] getMenuY() {
        menuYear();
        return menuY;
    }

    public void setMenuY(SelectItem[] menuY) {
        this.menuY = menuY;
    }

    public SelectItem[] getMenuM() {
        menuMes();
        return menuM;
    }

    public void setMenuM(SelectItem[] menuM) {
        this.menuM = menuM;
    }

    public ArrayList<Audiovisual> getArray() {
        consultar();
        return array;
    }

    public void setArray(ArrayList<Audiovisual> array) {
        this.array = array;
    }

}
