const { SocketLabsClient } = require('@socketlabs/email');
const exampleConfig = require('./exampleConfig');

const sender = "saranya.kavuri@socketlabs.com";
const recipient = "saranya.kavuri@socketlabs.com";
const body = "If Message sent is succesfull then my APP is working fine.";

function sendBasicEmail(){
    const client = new SocketLabsClient(exampleConfig.ServerId, exampleConfig.ApiKey);

    const message = {
        to: recipient,
        from: sender,
        subject: "Testing API injection Basic",
        textBody: body,
        htmlBody: `<html>${body} This is HTML body.</html>`,
        messageType: 'basic'
    };

    client.send(message).then(
        (res) => {
            console.log(res);
        },
        (err) => {
            console.log(err);
        });
}

sendBasicEmail();