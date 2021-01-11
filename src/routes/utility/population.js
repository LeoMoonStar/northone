const {Population} = require('../../schemas/population')
module.exports = {
    getAllPopulation: async (req,res,next)=>{
        Population.scan().exec((error,results)=>{
            if(error){
                console.error(error);
            } else{
                res.json(results)
            }
        })
    },
}