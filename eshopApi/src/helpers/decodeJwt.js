const jwt = require("jsonwebtoken");
require("dotenv").config();
const SECRET_KEY = process.env.SECRET;

const getTokenData =async (token) => {
      try {
          if (token) {
            token = token.split(" ")[1];
            let user = jwt.verify(token, SECRET_KEY);
          
         return user;
          }else{
            const msg = "No token provided. please log in";
              return msg;
          }
      } catch (error) {
        return error.message;
      }
        
   

}

module.exports = {getTokenData};