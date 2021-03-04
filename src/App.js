import React, { useState, useEffect } from 'react';
import './App.css';

import Form from './Component/Form';
import TodoList from './Component/TodoList';


function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('All');
  const [filterTodos, setFilterTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status])

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilterTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilterTodos(todos.filter(todo => todo.completed === false));
        break;
      default: setFilterTodos(todos);
        break;
    }
  };
const saveLocalTodos=() =>{
    localStorage.setItem('todos',JSON.stringify(todos));
};
const getLocalTodos=() =>{
  if (localStorage.getItem('todos')===null){
    localStorage.setItem('todos', JSON.stringify([]));
  }else {
    let todolocal = JSON.parse(localStorage.getItem('todos'));
    setTodos(todolocal);
  }
};

  return (
    <div className="">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        inputText={inputText}
        setStatus={setStatus}

      />
      <TodoList setTodos={setTodos}
        todos={todos}
        filterTodos={filterTodos} />

    </div>
  );
}


export default App;
