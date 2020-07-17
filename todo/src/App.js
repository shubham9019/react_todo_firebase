import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(["dos","take rubbish out"]);

  return (
    <div className="App">
      <h1>Hello World</h1>
      <input/>
      <button>todo</button>
      <ul>
        {todos.map(todo=>(
          <li>{todo}</li>
        ))}
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}

export default App;
