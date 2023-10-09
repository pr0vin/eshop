const jwt = require("jsonwebtoken");
require("dotenv").config();

const SECRET_KEY = process.env.SECRET;

const authAdmin = (req, res, next) => {
    try {
      let token = req.headers.authorization;
      if (token) {
        token = token.split(" ")[1];
        let user = jwt.verify(token, SECRET_KEY);
        req.userId = user.id;
        if (user.role == "admin") {
          next();
        } else {
          return res
           .status(401)
           .json({ message: "Only admin accessible content" });
        }
      } else {
        return res.status(401).json({ message: "Unauthorized Access1!" });
      }
    } catch (error) {
      console.log(error);
      res.status(401).json({ message: "Unauthorized Access" });
    }
  };


const authOperator = (req, res, next) => {
    try {
      let token = req.headers.authorization;
      if (token) {
        token = token.split(" ")[1];
        let user = jwt.verify(token, SECRET_KEY);
        req.userId = user.id;
        if (user.role == "operator" || user.role == "admin") {
          next();
        } else {
          return res
            .status(401)
            .json({ message: "Only operator accessible content" });
        }
      } else {
        return res.status(401).json({ message: "Unauthorized Access !" });
      }
    } catch (error) {
      console.log(error);
      res.status(401).json({ message: "Unauthorized Access" });
    }
  };

module.exports ={authAdmin,authOperator};