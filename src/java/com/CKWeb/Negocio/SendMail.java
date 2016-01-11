/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.CKWeb.Negocio;

/**
 *
 * @author USER
 */
import java.util.Properties;
import javax.mail.*;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

public class SendMail {

    private static String userEmail;
    private static String Subject;
    private static String Body;
    private static String from;
    private static String masterEmail = "pruebastreaming03@gmail.com";
    private static String masterPass = "streaming03";
    private static String newPass;

    public SendMail(String userEmail, String newPass) {
        this.userEmail = userEmail;
        this.newPass = newPass;
        Subject = "Estación CKWeb imagen y sonido. :: Recuperación de Contraseña";
        Body = "Su contraseña se ha restablecido satisfactoriamente\n"
                + "----------------------------------\n"
                + "Nueva contraseña: " + this.newPass + "\n\n\n"
                + "Por favor cambie la contraseña en su siguiente inicio de sesión\n\n"
                + "Estación CKWeb imagen y sonido.\n"
                + "Fundación Gilberto Alzate Avendaño.";
        from = masterEmail;
        System.out.println(sendFromGMail());
    }

    private static String sendFromGMail() {
        try {
            Properties props = System.getProperties();
            String host = "smtp.gmail.com";
            props.put("mail.smtp.starttls.enable", "true");
            props.put("mail.smtp.host", host);
            props.put("mail.smtp.user", from);
            props.put("mail.smtp.password", masterPass);
            props.put("mail.smtp.port", "587");
            props.put("mail.smtp.auth", "true");
            Session session = Session.getDefaultInstance(props);
            MimeMessage message = new MimeMessage(session);
            InternetAddress userAddress = new InternetAddress(userEmail);
            message.setFrom(new InternetAddress(from));
            message.addRecipient(Message.RecipientType.TO, userAddress);
            message.setSubject(Subject);
            message.setText(Body);
            Transport transport = session.getTransport("smtp");
            transport.connect(host, from, masterPass);
            transport.sendMessage(message, message.getAllRecipients());
            transport.close();
        } catch (AddressException ae) {
            return "AddressException: Correo NO Enviado ";
        } catch (MessagingException me) {
            me.printStackTrace();
            return "MessagingException: Correo NO Enviado ";
        }
        return "Correo Enviado Successfully";
    }
}
