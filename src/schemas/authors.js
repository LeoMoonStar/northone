const {dynamoose} = require('../config/dynamoose')

const authorSchema = new dynamoose.Schema({
    id:String,
    name:String,
    date:Date,
    country:String,
    language:String,
    type:String,
    linkclicks:Number,
},{
    timestamps:{
        createdAt:["createDate","creation"],
        updatedAt:["updateDate","updated"]
    }
})

const Author = dynamoose.model('author',authorSchema)

module.exports = {
    Author
}

 