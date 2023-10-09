const express = require('express');
const mongoose= require('mongoose');
require('dotenv').config();
const authJwt=require('./src/helpers/jwt')
const errorHandler=require('./src/helpers/errorHandler');
const app = express();



// environment variables
const API_URL=process.env.API_URL
const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);

})


// connect to MongoDB

const connection=()=>{
    try {
        mongoose.connect(`${API_URL}`, { useNewUrlParser: true, useUnifiedTopology: true }).then(
            ()=>{
                console.log('Connected to MongoDB');
            }
        );
    } catch (error) {
       console.log(error); 
    }
    return mongoose.connection;
}

connection();

// validaton and authoeizations


app.use(authJwt())
app.use(errorHandler);

// Routes
app.use(express.json());

const productRouter=require('./src/routes/productRoute');
const categoryRouter=require('./src/routes/categoryRoute');
const userRouter=require('./src/routes/userRoute');
const orderRouter=require('./src/routes/orderRoute');
const authRouter=require('./src/routes/authRoute');

app.use('/api/products', productRouter);
app.use('/api/categories',categoryRouter);
app.use('/api/users',userRouter);
app.use('/api/orders',orderRouter);
app.use('/api/auth',authRouter);



app.get('/',(req,res)=>{
    res.send('Hello World')
})
