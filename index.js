const  express = require("express");
const connection = require("./config/db");
const route = require("./routes/user.route");
const cookie = require("cookie-parser")
const app = express()

app.use(express.json())
app.use(cookie())
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs")
app.set("views",__dirname + "/views")
app.use(express.static(__dirname + "/public"))
app.use(route)

app.listen(8090,()=>{
    console.log("Server is listening..");
    connection()
})