var fs = require("fs");
var { AWS } = require("../src/config/aws");
var dynamodb = new AWS.DynamoDB();
var docClient = new AWS.DynamoDB.DocumentClient();
var TableName = "authors";

var p_CreateTable = {
  TableName: "authors",
  KeySchema: [
    { AttributeName: "id", KeyType: "HASH" }, //Partition key
    { AttributeName: "name", KeyType: "RANGE" }, //Sort key
  ],
  AttributeDefinitions: [
    { AttributeName: "id", AttributeType: "N" },
    { AttributeName: "name", AttributeType: "S" },
  ],

  ProvisionedThroughput: {
    ReadCapacityUnits: 5,
    WriteCapacityUnits: 5,
  },
};

var p_deleteTable = {
  TableName: "authors",
};

/*
dynamodb.createTable(p_CreateTable, function(err, data) {
    if (err) {
        console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        "Table Created!"
    }
});
*/
dynamodb.listTables(
  {
    ExclusiveStartTableName: "STRING_VALUE",
    Limit: "NUMBER_VALUE",
  },
  (err, data) => {}
);

dynamodb.deleteTable(p_deleteTable, function (err, data) {
  if (err) {
    console.error(
      "Unable to delete table. Error JSON:",
      JSON.stringify(err, null, 2)
    );
  } else {
    //createTable
    console.log("data:", data);
    dynamodb.createTable(p_CreateTable, function (err, data) {
      if (err) {
        console.error(
          "Unable to create table. Error JSON:",
          JSON.stringify(err, null, 2)
        );
      } else {
        var allData = JSON.parse(
          fs.readFileSync("./sampledata/authors.json", "utf8")
        );
        allData.forEach(function (author) {
          var p_SeedTable = {
            TableName: TableName,
            Item: {
              id: author.author,
              name: author.authorname,
              date: author.date,
              linkclicks: author.linkclicks,
            },
          };
          //console.log("Created table. Table description JSON:", JSON.stringify(p_SeedTable, null, 2));
          //seed Table
          docClient.put(p_SeedTable, function (err, data) {
            if (err) {
              console.error(
                "Unable to add item. Error JSON:",
                JSON.stringify(err, null, 2)
              );
            } else {
              console.log("Added items");
              //res.send(data)
            }
          });
          //console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
        });
      } //else
    });
  }
});
