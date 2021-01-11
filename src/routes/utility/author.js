const {Author} = require('../../schemas/authors')
module.exports = {
    getAllAuthor: async (req,res,next)=>{
        Author.scan().exec((error,results)=>{
            if(error){
                console.error(error);
            } else{
                res.json(results)
            }
        })
    },
}