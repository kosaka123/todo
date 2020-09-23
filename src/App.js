import React, { useEffect, useState } from "react";
import "./App.css";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "firebase";
function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          })),
        );
      });
  }, []);

  const addTodo = (e) => {
    e.preventDefault();
    setInput("");
    db.collection("todos").add({
      text: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };
  console.log(todos);
  return (
    <div className="App">
      <h1>Todo</h1>
      <form>
        <FormControl>
          <InputLabel>Write</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
        </FormControl>

        <Button
          disabled={!input}
          color="primary"
          variant="contained"
          type="submit"
          onClick={addTodo}
        >
          Add
        </Button>
      </form>

      <ul>
        {/* Todo is send data to the todo.js file */}
        {todos.map((todo) => (
          <Todo text={todo.data.text} timestamp={todo.data.timestamp} />
        ))}
      </ul>
    </div>
  );
}

export default App;
