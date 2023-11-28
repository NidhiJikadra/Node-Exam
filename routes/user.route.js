const {Router} = require("express")
const {signup, login, create, signupshow, loginshow, home, createshow} = require("../controllers/user.controller")
const route = Router()

route.get("/",home)
route.get("/signup",signupshow)
route.get("/login",loginshow)
route.get("/create",createshow)
route.post("/signup",signup)
route.post("/login",login)
route.post("/create",create)

module.exports = route