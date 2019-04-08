import AWS from 'aws-sdk';

AWS.config.update({
  region: 'us-east-1',
});

const dynamodb = new AWS.DynamoDB();

const params = {
  TableName: 'Users',
  KeySchema: [
    { AttributeName: 'UserID', KeyType: 'HASH' },
  ],
  AttributeDefinitions: [
    { AttributeName: 'UserID', AttributeType: 'S' },
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

export default dynamodb;
