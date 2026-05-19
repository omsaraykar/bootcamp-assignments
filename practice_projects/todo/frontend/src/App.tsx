import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";

type Todo = {
  id: number
  title: string
}

export function App() {
  const [todos, setTodos] = useState<{ id: number, title: string }[]>([])
  const [val, setVal] = useState("")

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await axios.get('http://localhost:3001/getTodos')
      setTodos(response.data.todos)
    }

    fetchTodos()
  }, [])

  return (
    <div className="container w-xl mx-auto p-8 relative bg-accent my-16 rounded-3xl">
      <h1 className="font-bold text-2xl">Your Todos</h1>
      <div className="flex gap-4 my-4">
        <Input
          value={val}
          onChange={(e) => {
            setVal(e.target.value)
          }}
        />
        <Button
          className="cursor-pointer"
          onClick={async () => {
            const response = await axios.post('http://localhost:3001/todo',
              {
                "title": val
              }
            )

            if (!response) {
              console.log("Failed to add todo.")
              return
            }

            // setVal("")

            setTodos([...todos, response.data.todo])
          }}
        >
          Add Todo
        </Button>
      </div>

      <div className="flex flex-col gap-3">
        {todos.map((todo: { id: number, title: string }) => {
          return (
            <div key={todo.id} className="flex items-center  justify-between h-3xl w-full p-3 bg-gray-200 rounded-xl">
              {todo.id + " " + todo.title}
              <div className="flex gap-3">
                <Button
                  variant={"outline"}
                  type="button"
                  className="cursor-pointer"
                  onClick={async () => {
                    const pVal = prompt("Edit Todo")
                    if (!pVal) {
                      console.log("prompt was empty")
                      return
                    }
                    axios.put(`http://localhost:3001/todo/${todo.id}`, {
                      title: pVal
                    })

                    setTodos(todos.map((t) => {
                      if (t.id === todo.id) {
                        return {
                          ...t,
                          title: pVal
                        }
                      }

                      return t
                    }))
                  }}
                >
                  Edit
                </Button>
                <Button
                  variant={"destructive"}
                  type="button"
                  className="cursor-pointer"
                  onClick={async () => {
                    const response = axios.delete('http://localhost:3001/todo/' + todo.id)

                    if (!response) {
                      console.log("couldn't delete todo")
                      return
                    }

                    setTodos(todos.filter((t) => {
                      return t.id !== todo.id
                    }))
                  }}
                >
                  Delete
                </Button>
              </div>
            </div>
          )
        })}
      </div>

    </div>
  );
}

export default App;
