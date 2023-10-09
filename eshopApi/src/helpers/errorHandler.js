function errorHandler (err,req,res,next){
    try {
        if(err.name==='ValidationError'){
           return res.status(400).json({message:err.message})
        }
        if(err.name==='UnauthorizedError'){
           return res.status(401).json({message:"the user is not authorized to access"})
        }
      return res.status(403).json({message:err.message})
      } catch (error) {
           res.status(500).json({message:error.message});
      }
}

module.exports = errorHandler;