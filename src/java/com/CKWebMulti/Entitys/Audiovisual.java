/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.CKWebMulti.Entitys;

import java.io.Serializable;
import java.util.Collection;
import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 *
 * @author Personal
 */
@Entity
@Table(name = "audiovisual")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Audiovisual.findAll", query = "SELECT a FROM Audiovisual a"),
    @NamedQuery(name = "Audiovisual.findByIdaudiovisual", query = "SELECT a FROM Audiovisual a WHERE a.idaudiovisual = :idaudiovisual"),
    @NamedQuery(name = "Audiovisual.findByNombre", query = "SELECT a FROM Audiovisual a WHERE a.nombre = :nombre"),
    @NamedQuery(name = "Audiovisual.findByTipo", query = "SELECT a FROM Audiovisual a WHERE a.tipo = :tipo"),
    @NamedQuery(name = "Audiovisual.findByPeso", query = "SELECT a FROM Audiovisual a WHERE a.peso = :peso"),
    @NamedQuery(name = "Audiovisual.findByDuracion", query = "SELECT a FROM Audiovisual a WHERE a.duracion = :duracion"),
    @NamedQuery(name = "Audiovisual.findByUrl", query = "SELECT a FROM Audiovisual a WHERE a.url = :url"),
    @NamedQuery(name = "Audiovisual.findByFecha", query = "SELECT a FROM Audiovisual a WHERE a.fecha = :fecha"),
    @NamedQuery(name = "Audiovisual.findByAutorizado", query = "SELECT a FROM Audiovisual a WHERE a.autorizado = :autorizado"),
    @NamedQuery(name = "Audiovisual.findByDescripcion", query = "SELECT a FROM Audiovisual a WHERE a.descripcion = :descripcion")})
public class Audiovisual implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "idaudiovisual")
    private Integer idaudiovisual;
    @Size(max = 200)
    @Column(name = "nombre")
    private String nombre;
    @Column(name = "tipo")
    private Integer tipo;
    @Size(max = 200)
    @Column(name = "peso")
    private String peso;
    @Size(max = 200)
    @Column(name = "duracion")
    private String duracion;
    @Size(max = 300)
    @Column(name = "url")
    private String url;
    @Column(name = "fecha")
    @Temporal(TemporalType.DATE)
    private Date fecha;
    @Column(name = "autorizado")
    private Boolean autorizado;
    @Size(max = 5000)
    @Column(name = "descripcion")
    private String descripcion;
    @JoinTable(name = "audiovisualestema", joinColumns = {
        @JoinColumn(name = "idaudiovisual", referencedColumnName = "idaudiovisual")}, inverseJoinColumns = {
        @JoinColumn(name = "idtema", referencedColumnName = "idtema")})
    @ManyToMany
    private Collection<Tema> temaCollection;
    @JoinColumn(name = "cedula", referencedColumnName = "cedula")
    @ManyToOne
    private Usuario cedula;
    @OneToMany(mappedBy = "idaudiovisual")
    private Collection<Tag> tagCollection;

    public Audiovisual() {
    }

    public Audiovisual(Integer idaudiovisual) {
        this.idaudiovisual = idaudiovisual;
    }

    public Integer getIdaudiovisual() {
        return idaudiovisual;
    }

    public void setIdaudiovisual(Integer idaudiovisual) {
        this.idaudiovisual = idaudiovisual;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Integer getTipo() {
        return tipo;
    }

    public void setTipo(Integer tipo) {
        this.tipo = tipo;
    }

    public String getPeso() {
        return peso;
    }

    public void setPeso(String peso) {
        this.peso = peso;
    }

    public String getDuracion() {
        return duracion;
    }

    public void setDuracion(String duracion) {
        this.duracion = duracion;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public Boolean getAutorizado() {
        return autorizado;
    }

    public void setAutorizado(Boolean autorizado) {
        this.autorizado = autorizado;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    @XmlTransient
    public Collection<Tema> getTemaCollection() {
        return temaCollection;
    }

    public void setTemaCollection(Collection<Tema> temaCollection) {
        this.temaCollection = temaCollection;
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
        hash += (idaudiovisual != null ? idaudiovisual.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Audiovisual)) {
            return false;
        }
        Audiovisual other = (Audiovisual) object;
        if ((this.idaudiovisual == null && other.idaudiovisual != null) || (this.idaudiovisual != null && !this.idaudiovisual.equals(other.idaudiovisual))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.CKWebMulti.Entitys.Audiovisual[ idaudiovisual=" + idaudiovisual + " ]";
    }
    
}
