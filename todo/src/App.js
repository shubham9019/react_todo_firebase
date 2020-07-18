import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {
  //state = temp storage
  const [todos, setTodos] = useState([]);
  //empty array for temp storage
  const [input, setInput] = useState('');

  useEffect(() => {
    //this code here fires when app.js loads
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc =>({id: doc.id, todo:doc.data().todo})))
    })
  }, []);

  const addTodo = (event)=>{
    event.preventDefault(); //prevents reloading
    setTodos([...todos, input]);
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <form> 
      {/* <input value={input} onChange={event => setInput(event.target.value)}/> */}
      <FormControl>
        <InputLabel>Write a todo</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)}/>
      </FormControl>
      <Button disabled={!input} type="submit" onClick = {addTodo} variant="contained" color="primary">
        todo
      </Button>
      {/* <button onClick = {addTodo}>todo</button> */}
      </form>


      <ul>
        {todos.map(todo=>(
          <Todo todo={todo}/>
        ))}
        
      </ul>
    </div>
  );
}

export default App;
