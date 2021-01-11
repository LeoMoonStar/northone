const {Author} = require('./schemas/authors')
const {Population} = require('./schemas/population')
const fs = require('fs');
const path = require('path');


var importData = function(table,file){
    table.scan().exec((error,results)=>{
        if(error){
            console.error(error)
        }
        else{
            if(results.length==0){
                var filePath = path.join(__dirname,file)
                var fileData = fs.readFileSync(filePath)
                var data = JSON.parse(fileData)
                data.forEach(e=>{
                    try{
                        table.create(e)
                    }
                    catch(err){
                        console.log(e)
                        console.error(err)
                    }
                    
                })
                console.log('Importing Done')
            }
            else{
                console.log('No need to import data')
            }
        }
    }) 
}


importData(Author,'../sampledata/authors.json')
//importData(Population,'../sampledata/population.json')

