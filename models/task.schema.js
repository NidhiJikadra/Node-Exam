const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
    title:String,
    duedate:String,
    importance:String,
    createdby:String
})

const TaskModel = new mongoose.model("Task",TaskSchema)

module.exports = TaskModel