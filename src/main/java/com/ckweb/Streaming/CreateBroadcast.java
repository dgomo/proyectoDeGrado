/*
 * Copyright (c) 2013 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */
package com.ckweb.Streaming;




import com.google.api.client.auth.oauth2.Credential;
import com.google.api.client.extensions.java6.auth.oauth2.AuthorizationCodeInstalledApp;
import com.google.api.client.extensions.java6.auth.oauth2.FileCredentialStore;
import com.google.api.client.extensions.jetty.auth.oauth2.LocalServerReceiver;
import com.google.api.client.googleapis.auth.oauth2.GoogleAuthorizationCodeFlow;
import com.google.api.client.googleapis.auth.oauth2.GoogleClientSecrets;
import com.google.api.client.googleapis.json.GoogleJsonResponseException;
import com.google.api.client.http.HttpTransport;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.jackson2.JacksonFactory;
import com.google.api.services.youtube.YouTube;
import com.google.api.services.youtube.model.LiveBroadcast;
import com.google.api.services.youtube.model.LiveBroadcastSnippet;
import com.google.api.services.youtube.model.LiveBroadcastStatus;
import com.google.api.services.youtube.model.LiveStream;
import com.google.api.services.youtube.model.LiveStreamCdn;
import com.google.api.services.youtube.model.LiveStreamSnippet;
import com.google.common.collect.Lists;
import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;
import java.util.Locale;
import java.util.TimeZone;

/**
 * Demo of inserting a broadcast and a stream then binding them together using
 * the YouTube Live API (V3) with OAuth2 for authorization.
 *
 * @author Ibrahim Ulukaya
 */
public class CreateBroadcast {

    /**
     * Global instance of the HTTP transport.
     */
    private static final HttpTransport HTTP_TRANSPORT = new NetHttpTransport();

    /**
     * Global instance of the JSON factory.
     */
    private static final JsonFactory JSON_FACTORY = new JacksonFactory();

    /**
     * Global instance of Youtube object to make all API requests.
     */
    private static YouTube youtube;

    /**
     * Authorizes the installed application to access user's protected data.
     *
     * @param scopes list of scopes needed to run YouTube upload.
     * @return authorized credential
     * @throws IOException
     */
    private static Credential authorize(List<String> scopes) throws Exception {

        // Load client secrets.
        GoogleClientSecrets clientSecrets = GoogleClientSecrets.load(
                JSON_FACTORY, CreateBroadcast.class.getResourceAsStream("/client_secrets.json"));

        // Checks that the defaults have been replaced (Default = "Enter X here").
        if (clientSecrets.getDetails().getClientId().startsWith("Enter")
                || clientSecrets.getDetails().getClientSecret().startsWith("Enter ")) {
            System.out.println(
                    "Enter Client ID and Secret from https://code.google.com/apis/console/?api=youtube"
                    + "into youtube-cmdline-createbroadcast-sample/src/main/resources/client_secrets.json");
            System.exit(1);
        }

        // Set up file credential store.
        FileCredentialStore credentialStore = new FileCredentialStore(
                new File(System.getProperty("user.home"), ".credentials/youtube-api-createbroadcast.json"),
                JSON_FACTORY);

        // Set up authorization code flow.
        GoogleAuthorizationCodeFlow flow = new GoogleAuthorizationCodeFlow.Builder(
                HTTP_TRANSPORT, JSON_FACTORY, clientSecrets, scopes).setCredentialStore(credentialStore)
                .build();

        // Build the local server and bind it to port 9000
        LocalServerReceiver localReceiver = new LocalServerReceiver.Builder().setPort(8081).build();

        // Authorize.
        return new AuthorizationCodeInstalledApp(flow, localReceiver).authorize("user");
    }

    /**
     *
     * @param snippet
     * @param status
     * @return
     */
    public boolean createBroadcast(LiveBroadcastSnippet broadcastSnippet, LiveBroadcastStatus status, LiveStreamSnippet streamSnippet, LiveStreamCdn liveStreamCdn) {

        // Scope required to wrie data to YouTube.
        List<String> scopes = Lists.newArrayList("https://www.googleapis.com/auth/youtube");

        try {
            // Authorization.
            System.out.println("Antes de credential");
            Credential credential = authorize(scopes);
            System.out.println("Despues de credential");

            // YouTube object used to make all API requests.
            youtube = new YouTube.Builder(HTTP_TRANSPORT, JSON_FACTORY, credential).setApplicationName(
                    "TestStreamingLive").build();

            // Create object broadcast.
            LiveBroadcast broadcast = new LiveBroadcast();
            broadcast.setKind("youtube#liveBroadcast");
            broadcast.setSnippet(broadcastSnippet);
            broadcast.setStatus(status);

            // Create the insert request
            YouTube.LiveBroadcasts.Insert liveBroadcastInsert
                    = youtube.liveBroadcasts().insert("snippet,status", broadcast);

            // Request is executed and inserted broadcast is returned
            LiveBroadcast returnedBroadcast = liveBroadcastInsert.execute();

            // Create object stream.
            LiveStream stream = new LiveStream();
            stream.setKind("youtube#liveStream");
            stream.setSnippet(streamSnippet);
            stream.setCdn(liveStreamCdn);

            // Create the insert request
            YouTube.LiveStreams.Insert liveStreamInsert
                    = youtube.liveStreams().insert("snippet,cdn", stream);

            // Request is executed and inserted stream is returned
            LiveStream returnedStream = liveStreamInsert.execute();

            // Create the bind request
            YouTube.LiveBroadcasts.Bind liveBroadcastBind
                    = youtube.liveBroadcasts().bind(returnedBroadcast.getId(), "id,contentDetails");

            // Set stream id to bind
            liveBroadcastBind.setStreamId(returnedStream.getId());

            // Request is executed and bound broadcast is returned
            returnedBroadcast = liveBroadcastBind.execute();

            // Print out returned results.
            System.out.println("\n================== Returned Bound Broadcast ==================\n");
            System.out.println("  - Broadcast Id: " + returnedBroadcast.getId());
            System.out.println("  - Bound Stream Id: " + returnedBroadcast.getContentDetails().getBoundStreamId());

            return true;
        } catch (GoogleJsonResponseException e) {
            System.out.println("GoogleJsonResponseException code: " + e.getDetails().getCode() + " : "
                    + e.getDetails().getMessage());
            e.printStackTrace();
        } catch (IOException e) {
            System.out.println("IOException: " + e.getMessage());
            e.printStackTrace();
        } catch (Exception t) {
            t.printStackTrace();
            System.out.println("Throwable exxxx: " +t.getStackTrace());
        }

        return false;
    }

}
