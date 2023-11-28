const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
    title:String,
    duedate:String,
    importance:String,
    createdby:{type:mongoose.Schema.Types.ObjectId,ref:"UserModel"}
})

const TaskModel = new mongoose.model("Task",TaskSchema)

module.exports = TaskModel