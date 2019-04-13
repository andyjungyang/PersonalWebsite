import AWS from 'aws-sdk';

AWS.config.update({
  region: process.env.AWS_REGION,
});

const docClient = new AWS.DynamoDB.DocumentClient();
const TableName = 'Users';

function readUsers(userID) {
  const params = {
    TableName,
    Key: {
      userID,
    },
  };
  return docClient.get(params).promise();
}

export default readUsers;
