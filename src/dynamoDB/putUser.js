import AWS from 'aws-sdk';

AWS.config.update({
  region: process.env.AWS_REGION,
});

const docClient = new AWS.DynamoDB.DocumentClient();
const TableName = 'Users';

async function putUser(userID, name) {
  const params = {
    TableName,
    Item: {
      userID,
      name,
    },
  };
  await docClient.put(params).promise();
  return params.Item;
}

export default putUser;
