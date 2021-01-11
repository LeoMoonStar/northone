var AWS = require('aws-sdk');
var path = require('path')
var configFilePath = path.join(__dirname, '/awsconfig.json')
AWS.config.loadFromPath(configFilePath)

var dynamodb = new AWS.DynamoDB();
var docClient = new AWS.DynamoDB.DocumentClient()

module.exports = {
    AWS:AWS,
    dynamodb,
    docClient
}
