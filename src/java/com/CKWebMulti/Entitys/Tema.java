/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.CKWebMulti.Entitys;

import java.io.Serializable;
import java.util.Collection;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 *
 * @author Personal
 */
@Entity
@Table(name = "tema")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Tema.findAll", query = "SELECT t FROM Tema t"),
    @NamedQuery(name = "Tema.findByIdtema", query = "SELECT t FROM Tema t WHERE t.idtema = :idtema"),
    @NamedQuery(name = "Tema.findByNombre", query = "SELECT t FROM Tema t WHERE t.nombre = :nombre"),
    @NamedQuery(name = "Tema.findByDescripcion", query = "SELECT t FROM Tema t WHERE t.descripcion = :descripcion")})
public class Tema implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "idtema")
    private Integer idtema;
    @Size(max = 200)
    @Column(name = "nombre")
    private String nombre;
    @Size(max = 1000)
    @Column(name = "descripcion")
    private String descripcion;
    @ManyToMany(mappedBy = "temaCollection")
    private Collection<Audiovisual> audiovisualCollection;
    @JoinColumn(name = "cedula", referencedColumnName = "cedula")
    @ManyToOne
    private Usuario cedula;
    @OneToMany(mappedBy = "idtema")
    private Collection<Tag> tagCollection;

    public Tema() {
    }

    public Tema(Integer idtema) {
        this.idtema = idtema;
    }

    public Integer getIdtema() {
        return idtema;
    }

    public void setIdtema(Integer idtema) {
        this.idtema = idtema;
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

    @XmlTransient
    public Collection<Audiovisual> getAudiovisualCollection() {
        return audiovisualCollection;
    }

    public void setAudiovisualCollection(Collection<Audiovisual> audiovisualCollection) {
        this.audiovisualCollection = audiovisualCollection;
    }

    public Usuario getCedula() {
        return cedula;
    }

    public void setCedula(Usuario cedula) {
        this.cedula = cedula;
    }

    @XmlTransient
    public Collection<Tag> getTagCollection() {
        return tagCollection;
    }

    public void setTagCollection(Collection<Tag> tagCollection) {
        this.tagCollection = tagCollection;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idtema != null ? idtema.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Tema)) {
            return false;
        }
        Tema other = (Tema) object;
        if ((this.idtema == null && other.idtema != null) || (this.idtema != null && !this.idtema.equals(other.idtema))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.CKWebMulti.Entitys.Tema[ idtema=" + idtema + " ]";
    }
    
}
