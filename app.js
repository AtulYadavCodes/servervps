import express from 'express';
const app=express();
const PORT=3000;
app.get('/',(req,res)=>{res.send("hello")});
app.get('/vpsservices',(req,res)=>{res.send("vpsse...on")});
app.listen(PORT,()=>{console.log("strted")});
