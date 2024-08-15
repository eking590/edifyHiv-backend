import express from 'express'; 
// import mongoose from 'mongoose'; 
import cors from "cors"; 
import { config } from "dotenv";
import bodyParser from "body-parser";
import { Mongoose } from './config/db.js';
import accountRoutes from './routes/accountRoutes.js'; 
import memberRoutes from './routes/memberRoutes.js'; 
import communicationRoutes from './routes/communicationRoutes.js'

//import { errorHandler } from "./middleware/errorHandler.js"; 
//import { ValidateToken } from './middleware/ValidateToken.js';


const app = express(); 

//increase the payload limit(e.g., 10mb)
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json({}));


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    next(); 
}); 


app.get('/',(req, res)=>{
    res.send('Welcome to EdifyHiv Backend !!!'); 

}); 






// add errorhandler here 
//app.use(errorHandler);

//routing 
//app.use('/customer', customerRoute); 
app.use('/api/account', accountRoutes);
app.use('/api/member', memberRoutes); 
app.use('/api/communicate', communicationRoutes); 


config();


app.listen(process.env.PORT || 7000, (err) => {
    if(err){
        console.log(err); 
    }
    console.log(`server listening on port http://localhost:${process.env.PORT}`)
})