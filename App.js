import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Learn MERN with ABDUL YESDANI.
        </p>
         <a
          className="App-link"
          href="https://reactjs.orgs"
          target="_blank"
          rel="noopener noreferrer"
        > 
          
        </a>
      </header>
    </div>
  );
} 

export default App;


//import React, { useState, useEffect } from 'react';/* 
/*import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/todos')
      .then(res => setTodos(res.data))
      .catch(console.error);
  }, []);

  const handleNewTodoChange = e => setNewTodo(e.target.value);

  const handleNewTodoSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/todos', { description: newTodo })
      .then(res => {
        setTodos([...todos, res.data]);
        setNewTodo('');
      })
      .catch(console.error);
  };

  const handleTodoComplete = todoId => {
    const todoIndex = todos.findIndex(todo => todo.id === todoId);
    const updatedTodo = { ...todos[todoIndex], completed: !todos[todoIndex].completed };
    axios.patch(`http://localhost:5000/todos/${todoId}`, { completed: updatedTodo.completed })
      .then(res => {
        const updatedTodos = [...todos];
        updatedTodos[todoIndex] = updatedTodo;
        setTodos(updatedTodos);
      })
      .catch(console.error);
  };

  const handleTodoDelete = todoId => {
    axios.delete(`http://localhost:5000/todos/${todoId}`)
      .then(res => {
        const updatedTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(updatedTodos);
      })
      .catch(console.error);
  };

  return (
    <div>
      <h1>MERN TODO App</h1>
      <form onSubmit={handleNewTodoSubmit}>
        <input type="text" value={newTodo} onChange={handleNewTodoChange} />
        <button type="submit">Add</button>
      </form>
    </div>)
}
 */