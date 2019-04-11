import AWS from 'aws-sdk';

AWS.config.update({
  region: process.env.AWS_REGION,
});

const docClient = new AWS.DynamoDB.DocumentClient();
const TableName = 'Contacts';

async function scanContacts() {
  const params = {
    TableName,
  };

  const result = await docClient.scan(params).promise();
  return result.Items;
}

export default scanContacts;
