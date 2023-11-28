const TaskModel = require("../models/task.schema");
const UserModel = require("../models/user.schema")

const home = (req,res) =>{
    res.render("home")
}

const loginshow = (req,res) =>{
    res.render("login")
}

const signupshow = (req,res) =>{
    res.render("signup")
}

const createshow = (req,res) =>{
    res.render("create")
}

const signup = async(req,res) =>{
    let data = await UserModel.create(req.body)
    console.log(data);
    res.send(data)
}

const login = async(req,res)=>{
    let {email,password} = req.body
    let data = await UserModel.findOne({email:email,password:password})

    if(data){
        res.cookie("id",data.id).render("create")
        // console.log(req.cookies);
    }
    else{
        res.send("User not Exist")
    }
}

const create = async(req,res) =>{
    let user = req.cookies
    if(user){
        // let data = await UserModel.findOne({id:req.cookies})
        let task = await TaskModel.create(req.body).populate()
        res.send(task)
    }
    else{
        res.send("You are not logged in")
    }
}

module.exports = {signup,login,create,home,loginshow,signupshow,createshow}