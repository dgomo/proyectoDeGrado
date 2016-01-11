/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ckweb.Streaming;


import com.google.api.client.util.DateTime;
import com.google.api.services.youtube.model.LiveBroadcastSnippet;
import com.google.api.services.youtube.model.LiveBroadcastStatus;
import com.google.api.services.youtube.model.LiveStreamCdn;
import com.google.api.services.youtube.model.LiveStreamSnippet;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.Locale;
import javax.jws.WebService;
import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.ejb.Stateless;

/**
 *
 * @author USER
 */
@WebService(serviceName = "EventCreateWebService")
@Stateless()
public class EventCreateWebService {

    /**
     * This is a sample web service operation
     */

    /**
     * Web service operation
     */
    @WebMethod(operationName = "crearEvento")
    public Integer crearEvento(@WebParam(name = "titulo") String titulo, 
            @WebParam(name = "descripcion") String descripcion, 
            @WebParam(name = "date") Date date, 
            @WebParam(name = "state") String state) {
        //TODO write your implementation code here:
        System.out.println(titulo + " " + descripcion + " " + date + " " + state);

        // Create a snippet with title, scheduled start and end times.
        LiveBroadcastSnippet broadcastSnippet = new LiveBroadcastSnippet();
        broadcastSnippet.setTitle(titulo);
        broadcastSnippet.setDescription(descripcion);

        // Tener presente el sentido horario, revisar http://www.w3.org/TR/NOTE-datetime
        Calendar calendar = new GregorianCalendar(new Locale("es", "ES"));
        DateTime dateTime = new DateTime(calendar.getTime(), calendar.getTimeZone());
        broadcastSnippet.setScheduledStartTime(dateTime);

        // Create LiveBroadcastStatus with privacy status.
        LiveBroadcastStatus status = new LiveBroadcastStatus();
        status.setPrivacyStatus((state.equals((String) "Si")) ? "private" : "public");

        // Create a snippet with title.
        LiveStreamSnippet streamSnippet = new LiveStreamSnippet();
        streamSnippet.setTitle(titulo);

        // Create content distribution network with format and ingestion type.
        LiveStreamCdn cdn = new LiveStreamCdn();
        cdn.setFormat("1080p");
        cdn.setIngestionType("rtmp");

        CreateBroadcast createBroadcast = new CreateBroadcast();
        boolean sucessfull = createBroadcast.createBroadcast(broadcastSnippet, status, streamSnippet, cdn);
        if (!sucessfull) {
            System.out.println("No Pudo");
            return 0;
        } else {
            System.out.println("Pudo");
            return 1;
        }
    }
    
    
}
