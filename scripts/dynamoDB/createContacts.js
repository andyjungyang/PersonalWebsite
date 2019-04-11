import AWS from 'aws-sdk';
import {} from 'dotenv/config';

AWS.config.update({
  region: process.env.AWS_REGION,
});

const dynamodb = new AWS.DynamoDB();

const params = {
  TableName: 'Contacts',
  KeySchema: [
    { AttributeName: 'Title', KeyType: 'HASH' },
  ],
  AttributeDefinitions: [
    { AttributeName: 'Title', AttributeType: 'S' },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 10,
  },
};

dynamodb.createTable(params, (err, data) => {
  if (err) {
    console.error('Unable to create table. Error JSON:', JSON.stringify(err, null, 2));
  } else {
    console.log('Created table. Table description JSON:', JSON.stringify(data, null, 2));
  }
});
