const {expressjwt}=require('express-jwt');
const User=require('../models/User');
require('dotenv').config();

function authJwt(){
  
    return expressjwt({
        secret:process.env.SECRET,
        algorithms:['HS256'],
        isRevoked:isRevoked
    }).unless({
        path:[
            {url:/\/api\/categories(.*)/,methods:['GET','OPTIONS'],},
            {url:/\/api\/products(.*)/,methods:['GET','OPTIONS'],},
            {url:/\/api\/cart(.*)/,methods:['GET','POST','PUT','DELETE','OPTIONS'],},
            '/api/auth/login',
        '/api/auth/register',]
    })

    
}
async function isRevoked(req,token){
   
    if (token.payload.isAdmin == false) {
        return true;
      }
      return false;



  
}
module.exports =authJwt;