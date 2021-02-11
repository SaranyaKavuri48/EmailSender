 const { SocketLabsClient, BulkMessage, BulkRecipient } = require('@socketlabs/email');
 const exampleConfig = require('./exampleConfig');

const sender = "saranya.kavuri@socketlabs.com";
const recipient = "saranya.kavuri@socketlabs.com";

function sendBulkEmail(){

     const client = new SocketLabsClient(exampleConfig.ServerId, exampleConfig.ApiKey);

     let bulkMessage = new BulkMessage();

    bulkMessage.textBody = "Is your favorite color still %%FavoriteColor%%?";
    bulkMessage.htmlBody = "<html><body><p>Is your favorite color still %%FavoriteColor%%?</p></body></html>";
    bulkMessage.subject = "Sending a Bulk Message With Merge Fields";
    bulkMessage.from = sender;

    let recipient1 = new BulkRecipient(recipient);
    recipient1.addMergeData("FavoriteColor", "Green");
    bulkMessage.to.push(recipient1);

    const recipient2 = {
        emailAddress: recipient,
        friendlyName: "Saranya Kavuri",
        mergeData: [
            { key: "FavoriteColor", value: "Orange" }
        ]
    };

    bulkMessage.to.push(recipient2);

    client.send(bulkMessage).then(
        (res) => {
            console.log(res);
        },
        (err) => {
            console.log(err);
        });
}

sendBulkEmail();