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
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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
@Table(name = "tag")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Tag.findAll", query = "SELECT t FROM Tag t"),
    @NamedQuery(name = "Tag.findByIdtag", query = "SELECT t FROM Tag t WHERE t.idtag = :idtag"),
    @NamedQuery(name = "Tag.findByPalabra", query = "SELECT t FROM Tag t WHERE t.palabra = :palabra")})
public class Tag implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "idtag")
    private Integer idtag;
    @Size(max = 100)
    @Column(name = "palabra")
    private String palabra;
    @JoinColumn(name = "idaudiovisual", referencedColumnName = "idaudiovisual")
    @ManyToOne
    private Audiovisual idaudiovisual;
    @JoinColumn(name = "idtema", referencedColumnName = "idtema")
    @ManyToOne
    private Tema idtema;

    public Tag() {
    }

    public Tag(Integer idtag) {
        this.idtag = idtag;
    }

    public Integer getIdtag() {
        return idtag;
    }

    public void setIdtag(Integer idtag) {
        this.idtag = idtag;
    }

    public String getPalabra() {
        return palabra;
    }

    public void setPalabra(String palabra) {
        this.palabra = palabra;
    }

    public Audiovisual getIdaudiovisual() {
        return idaudiovisual;
    }

    public void setIdaudiovisual(Audiovisual idaudiovisual) {
        this.idaudiovisual = idaudiovisual;
    }

    public Tema getIdtema() {
        return idtema;
    }

    public void setIdtema(Tema idtema) {
        this.idtema = idtema;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idtag != null ? idtag.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Tag)) {
            return false;
        }
        Tag other = (Tag) object;
        if ((this.idtag == null && other.idtag != null) || (this.idtag != null && !this.idtag.equals(other.idtag))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.CKWebMulti.Entitys.Tag[ idtag=" + idtag + " ]";
    }
    
}
