const TaskModel = require("../models/task.schema");
const UserModel = require("../models/user.schema")

const signup = async(req,res) =>{
    let data = await UserModel.create(req.body)
    console.log(data);
    res.send(data)
}

const login = async(req,res)=>{
    let {email,password} = req.body
    let data = await UserModel.findOne({email:email,password:password})

    if(data){
        res.cookie("id",data.id).send("User Logged in")
        console.log(req.cookies);
    }
    else{
        res.send("User not Exist")
    }
}

const create = async(req,res) =>{
    let user = req.cookies
    if(user){
        // let data = await UserModel.findOne({id:req.cookies})
        // let task = await TaskModel.create(req.body,{createdby:data.id})
        res.send("Task Created")
    }
    else{
        res.send("You are not logged in")
    }
}

module.exports = {signup,login,create}

