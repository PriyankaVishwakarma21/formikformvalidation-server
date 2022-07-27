const express= require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');

require('dotenv').config();

const router = require('./routers/RegisterRouter');
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({origin:process.env.CLIENT_URL,credentials:true}));
app.use('/',router);


mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true,useUnifiedTopology:true})
.then(()=>{console.log('connected')})
.catch((err)=>{console.log(err)});

app.listen(5000,()=>{
    console.log('DB connected successfully');
})