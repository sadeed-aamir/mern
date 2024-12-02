//const express = require('express');
import cors from 'cors';

import express, { request } from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from "./routes/product.route.js";


dotenv.config();
const app = express();
app.use(cors());
const PORT = process.env.PORT;   

app.use(express.json()); // allows us to accept json data in req.body

app.use("/api/products", productRoutes)

app.listen(PORT, () => {
    connectDB();
    console.log('Server started at local host http://localhost:'+PORT); 
} );
 


