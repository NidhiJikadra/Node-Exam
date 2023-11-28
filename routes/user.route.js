const {Router} = require("express")
const {signup, login, create} = require("../controllers/user.controller")
const route = Router()

route.post("/signup",signup)
route.post("/login",login)
route.post("/create",create)

module.exports = route