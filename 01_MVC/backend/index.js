const express = require("express")
const app = express()

app.use(express.json()) 
app.use(express.urlencoded({extended:true}))

const {getTodos, postTodo} = require("./Controllers/TodoController")

const {connect} = require("./Config/connection")

const dotenv = require("dotenv").config()

const {Todo} = require("./Models/todo")

app.route("/todo").get(getTodos).post(postTodo)

const port = process.env.PORT ?? 5000

app.listen(port, () => {
    console.log(`Server Connected At Port: ${port}`)
    connect()
})