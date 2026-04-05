import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask("");
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <h1>Todo App</h1>

      <div className="input-group">
        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={addTodo}>Add</button>
      </div>

      {todos.map((todo, index) => (
        <div className="todo-item" key={index}>
          <span>{todo}</span>
          <button
            className="delete-btn"
            onClick={() => deleteTodo(index)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;