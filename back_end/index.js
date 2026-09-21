let express=require('express');
let app=express();
app.get("/login",(req,res)=>{
    res.send("login is called");
})
app.get("/register",(req,res)=>{
    res.send("register is called");
})
app.listen(3000,()=>{
    console.log("server lisening on port 3000");
    
})