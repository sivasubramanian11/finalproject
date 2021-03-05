const mongoose =require("mongoose");
const express  =require('express');
const assert   =require('assert');
const bodyparser=require('body-parser');
const path     =require('path');


const app=express();
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyparser.urlencoded({extended:true}));


app.Post("/",function(req,res){
	res.sendfile(__dirname+"/signup.html");
})
mongoose.connect("mongodb://127.0.0.1:27017/siva", {useNewUrlParser: true, useUnifiedTopology:true });
//database connection
app.post("/",function(req,res){
    const fname=req.body.name
    const electronicmail= req.body.email;

const Schema=mongoose.Schema;

const usersSchema= new mongoose.Schema({
	firstname:{type:String,required:true},
	email:{type:String,required:true},
});
const siva =mongoose.model("siva",usersSchema)
      
    let hello= new hello({
	firstname:fname,
	email:electronicmail
});
hello.save(function()
{
	res.sendfile(__dirname+"/success.html");
})
})

	app.listen(3000,function(req,res){
		console.log("listening");
	})