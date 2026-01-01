const express=require("express"),mysql=require("mysql"),bp=require("body-parser");
const app=express(); app.use(bp.urlencoded({extended:true})); app.use(express.static("."));
const db=mysql.createConnection({host:"localhost",user:"root",password:"pass",database:"marks_db"});

app.post("/add",(req,res)=>db.query("CALL addMarks(?,?,?,?)",
 [req.body.name,req.body.subject1,req.body.subject2,req.body.subject3],
 e=>res.send(e?"Error":"Inserted")));

app.get("/marks",(req,res)=>db.query("CALL getMarks()", (e,r)=>res.json(r[0])));
app.listen(3000,()=>console.log("http://localhost:3000")); 	