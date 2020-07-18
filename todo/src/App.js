import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import './App.css';

function App() {
  //state = temp storage
  const [todos, setTodos] = useState(["dos","take rubbish out","helu"]);
  //empty array for temp storage
  const [input, setInput] = useState('');

  const addTodo = (event)=>{
    event.preventDefault(); //prevents reloading
    setTodos([...todos, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <form> 
      <input value={input} onChange={event => setInput(event.target.value)}/>
      <Button disabled={!input} type="submit" onClick = {addTodo} variant="contained" color="primary">
        todo
      </Button>
      {/* <button onClick = {addTodo}>todo</button> */}
      </form>
      <ul>
        {todos.map(todo=>(
          <li>{todo}</li>
        ))}
        
      </ul>
    </div>
  );
}

export default App;
