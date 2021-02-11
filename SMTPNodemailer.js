const nodemailer = require("nodemailer");

const sender = "saranya.kavuri@socketlabs.com";
const recipient = "saranya.kavuri@socketlabs.com";
const body = "If you receive this email then the node app is working! This is text body.";


function getUserNamePassword() {
    return {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD 
    };
}

function sendEmail(){

    let creds = getUserNamePassword();

    let transporter = nodemailer.createTransport({
        host: "smtp.socketlabs.com",
        port: 587,
        secure: false, 
        auth: {
            user: creds.user,
            pass: creds.pass,
        },
        });
        
    transporter.sendMail({
    from: "Saranya "+ sender,
    to: recipient,
    subject: "Testing nodemailer",
    text: body,
    html: `<html>${body} This is HTML body.</html>`,
    }, (error, info) => {
        if (error) {
            console.log("Error sending the email");
        }
        else {
            console.log("Message sent: %s", info.messageId);

        }
    });
}
sendEmail();