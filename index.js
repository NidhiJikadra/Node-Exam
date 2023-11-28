const  express = require("express");
const connection = require("./config/db");
const route = require("./routes/user.route");
const cookie = require("cookie-parser")
const app = express()

app.use(express.json())
app.use(cookie())
app.use(route)

app.listen(8090,()=>{
    console.log("Server is listening..");
    connection()
})