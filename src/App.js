import React, { useState } from 'react';
import TodoList from './Todo/TodoList';
import axios from 'axios';

function App() {
  let store = [];
  const appCss = {
    background: 'rgba(191, 196, 200, 0.44) none repeat scroll 0% 0%',
    padding: '50px',
    height: '100vh'
  }

  axios.get('/todos')
  .then(function (response) {
    setTodos(response.data.data);
  })
  .catch(function (error) {
    console.log(error);
  });

  const [todos, setTodos] = useState( store );

  const addItem = text => {
    const todo = { item: text, isCompleted: false };
    const newTodos = [...todos, todo ];
    axios.post('/todos', todo)
    .then(function (response) {
      setTodos(newTodos);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const complete = index => {
    const newTodos = [...todos];
    const todo = newTodos[index];
    todo.isCompleted = !todo.isCompleted
    setTodos(newTodos);
    axios.put(`/todos/${todo._id}`, todo)
    .then(function (response) {
      setTodos(newTodos);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const removeItem = index => {
    const newTodos = [...todos];
    const removedTodo = newTodos.splice(index, 1);

    axios.delete(`/todos/${removedTodo[0]._id}`)
    .then(function (response) {
      setTodos(newTodos);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div style={appCss}>
      <TodoList todos={todos} addItem={addItem} completeTodo={complete} removeItem={removeItem} />
    </div>
  );
}

export default App;
