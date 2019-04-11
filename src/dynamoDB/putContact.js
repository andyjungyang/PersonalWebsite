import AWS from 'aws-sdk';

AWS.config.update({
  region: process.env.AWS_REGION,
});

const docClient = new AWS.DynamoDB.DocumentClient();
const TableName = 'Contacts';

async function putContact(contact) {
  const params = {
    TableName,
    Item: {
      Title: contact.title,
      Content: contact.content,
      Logo: contact.logo,
      Color: contact.color,
      IsLink: contact.isLink,
    },
  };
  await docClient.put(params).promise();
  return params.Item;
}

export default putContact;
