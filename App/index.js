const express = require("express");
const app = express();


app.get("/",(req,res)=>{
    res.send("HOME PAGE")
})

app.get("/about",(req,res)=>{
    res.send("About page")
})

app.get("/payment",(req,res)=>{
    res.send("Payment page")
})

app.get("/contact",(req,res)=>{
    res.send("This is contact page")
})

app.get("/place",(req,res)=>{
    res.send("The jaipur city is beautiful")
})

app.get('/data',(req,res)=>{
    console.log(req.query);
    res.send('ok')
})

app.get('/product/:id',(req,res)=>{
    const {id} =req.params;
    res.send(`you want to show product of its id ${id}`)
})

const filePath =Path.join(__dirname,"index.html")
app.get("/payment",(req,res)=>{
    res.sendFile(filePath);
})

const PORT = 4000;
app.listen(PORT,()=>{
    console.log("Server run at port ",PORT);
})