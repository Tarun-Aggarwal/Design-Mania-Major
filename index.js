const express=require('express')
const dbConnect=require('./config/database') 
const app=express();
const UserRotuer=require('./controller/userLogin')
const path = require("path")
app.set("view engine", "ejs")
app.set("/views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));

const PORT=3000;

dbConnect().then(()=>{

    console.log(`connected to the database`);
    
    app.listen(PORT,()=>{
        console.log(`App is runnig on the port ${PORT}`)
    })   
})

app.get("/", (req, resp) => {
    resp.render("home.ejs");
})

app.get("/login", (req, resp) => {
    resp.render("login.ejs")
})

app.use("/api/user",UserRotuer);
app.use('/api/user',UserRotuer);
