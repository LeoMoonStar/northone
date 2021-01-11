const {dynamoose} = require('../config/dynamoose')

const schema = new dynamoose.Schema({
    year:Number,
    age:  Number,
    sex:Number,
    people:Number
},{
    saveUnknown:true,
    timestamps:true
})

const Population = dynamoose.model('population',schema)

module.exports = {
    Population
}