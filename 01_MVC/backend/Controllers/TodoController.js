// METHOD: GET
// URL: http://localhost:5000/todo/
const getTodos = async (req, res) => {
    return res.send("Todos")
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

return  res.status("201").send({
    "data":req.body,
    "message": "Todo Added Successfully"
})

    } catch (error) {
        console.log(`Error Message: ${error}`)
        return  res.status(500).send("Error")
    }
}

module.exports = {getTodos, postTodo}