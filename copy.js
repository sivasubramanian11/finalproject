
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
