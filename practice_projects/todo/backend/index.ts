import express from "express"
import cors from "cors"
import { idText } from "typescript"

const app = express()
app.use(express.json())
app.use(cors())

let todos: { id: number, title: string }[] = [];

let count = 1

app.get("/getTodos", (req, res) => {
    res.send({
        "todos": todos
    })
})

app.post("/todo", (req, res) => {
    const title = req.body.title
    const todo = {
        id: count++,
        title: title
    }
    todos.push(todo)

    res.send({
        message: "todo added",
        todo: todo
    })
})

app.delete("/todo/:id", (req, res) => {
    const todoId = Number(req.params.id)

    todos = todos.filter((todo) => {
        return todo.id !== todoId
    })

    res.json({
        message: "todo deleted"
    })
})

app.put("/todo/:id", (req, res) => {
    const id = Number(req.params.id)
    const title = req.body.title

    todos = todos.map((todo) => {
        if (id === todo.id) {
            return ({
                ...todo,
                title
            })
        }

        return todo
    })

    res.send({
        message: "todo edited"
    })
})

app.listen(3001, () => {
    console.log("Listening on port 3001")
})