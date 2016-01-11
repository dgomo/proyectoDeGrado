/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.CKWebMulti.Entitys;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author Personal
 */
@Entity
@Table(name = "aliado")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Aliado.findAll", query = "SELECT a FROM Aliado a"),
    @NamedQuery(name = "Aliado.findByIdAliado", query = "SELECT a FROM Aliado a WHERE a.idAliado = :idAliado"),
    @NamedQuery(name = "Aliado.findByNombre", query = "SELECT a FROM Aliado a WHERE a.nombre = :nombre"),
    @NamedQuery(name = "Aliado.findByDescripcion", query = "SELECT a FROM Aliado a WHERE a.descripcion = :descripcion"),
    @NamedQuery(name = "Aliado.findByImagen", query = "SELECT a FROM Aliado a WHERE a.imagen = :imagen"),
    @NamedQuery(name = "Aliado.findByUrl", query = "SELECT a FROM Aliado a WHERE a.url = :url")})
public class Aliado implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id_aliado")
    private Integer idAliado;
    @Size(max = 2000)
    @Column(name = "nombre")
    private String nombre;
    @Size(max = 2000)
    @Column(name = "descripcion")
    private String descripcion;
    @Size(max = 2000)
    @Column(name = "imagen")
    private String imagen;
    @Size(max = 2000)
    @Column(name = "url")
    private String url;

    public Aliado() {
    }

    public Aliado(Integer idAliado) {
        this.idAliado = idAliado;
    }

    public Integer getIdAliado() {
        return idAliado;
    }

    public void setIdAliado(Integer idAliado) {
        this.idAliado = idAliado;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idAliado != null ? idAliado.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Aliado)) {
            return false;
        }
        Aliado other = (Aliado) object;
        if ((this.idAliado == null && other.idAliado != null) || (this.idAliado != null && !this.idAliado.equals(other.idAliado))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.CKWebMulti.Entitys.Aliado[ idAliado=" + idAliado + " ]";
    }
    
}
