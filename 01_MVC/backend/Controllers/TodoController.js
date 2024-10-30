const {createTodo} = require("../Models/todo")

// METHOD: GET
// URL: http://localhost:5000/todo/
const getTodos = async (req, res) => {
    try{
        const getTodo = await createTodo.find()
        return res.status("203").send({"Data":getTodo})
    }catch(error){
        console.log(`Error: ${error}`)
        return res.status("400").send({"Error": error})
    }
}

// METHOD: POST
// URL: http://localhost:5000/todo/
const postTodo = async (req, res) => {
    try {
        const {title, description, todo} = req.body

    if(!title ||  !description || !todo) {
        console.table([title, description, todo])
        return res.status(400).send("Please fill in all fields")
}

    const newTodo = await createTodo.create({
        title:  title,
        description: description,
        todo: todo
    })

    if(!newTodo){
        return res.status(400).send("Failed to create new todo")
    }else{
        console.log(newTodo)
        return res.send(newTodo)
    }

// return  res.status("201").send({
//     "data":req.body,
//     "message": "Todo Added Successfully"
// })

    } catch (error) {
        console.log(`Error Message: ${error}`)
        return  res.status(500).send("Error")
    }
}

module.exports = {getTodos, postTodo}