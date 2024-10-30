const mongoose  = require('mongoose');

const todoModelSchema = mongoose.Schema(
    {
        title: {
            type:String,
            required: [true, "Title Required"]
        },
        description:{
            type:String,
            required:[false, "Not Required"]
        },
        todo: {
            type: String,
            required: [true, "Todo Required"]
        },
        staus: {
            type: String,
            required: [true, "Staus Required"],
            default: "Active"
        }
    }
)

const createTodo = mongoose.model("Todo",  todoModelSchema);


module.exports =  {createTodo}
