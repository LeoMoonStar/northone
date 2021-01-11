require('dotenv').config(); 
const dynamoose = require("dynamoose");
dynamoose.aws.sdk.config.update({
    "accessKeyId": process.env.ACCESSKEYID,
    "secretAccessKey": process.env.SECRETACCESSKEY,
    "region": process.env.REGION
});
module.exports={
    dynamoose
}