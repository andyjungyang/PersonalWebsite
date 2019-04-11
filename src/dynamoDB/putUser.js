import AWS from 'aws-sdk';

AWS.config.update({
  region: process.env.AWS_REGION,
});

const docClient = new AWS.DynamoDB.DocumentClient();
const TableName = 'Users';

async function putUser(profile) {
  const params = {
    TableName,
    Item: {
      UserID: profile.id,
      Name: profile.displayName,
    },
  };
  await docClient.put(params).promise();
  return params.Item;
}

export default putUser;
