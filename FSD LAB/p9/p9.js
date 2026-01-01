const e=require("express"),m=require("mysql"),b=require("body-parser"),a=e();
a.use(b.urlencoded({extended:true})); a.use(e.static("."));
const db=m.createConnection({host:"localhost",user:"root",password:"MRG007",database:"marks_db"});

a.post("/add",(r,s)=>db.query("CALL addMarks(?,?,?,?)",[r.body.name,r.body.s1,r.body.s2,r.body.s3],e=>s.send(e?"Error":"Inserted")));
a.get("/marks",(r,s)=>db.query("CALL getMarks()", (e,d)=>s.json(d[0])));
a.listen(3000,()=>console.log("http://localhost:3000/p9.html"));