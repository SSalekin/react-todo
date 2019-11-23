import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

export default function TodoList({todos, addItem, completeTodo, removeItem}) {
  const style = {
    width: '50%',
    background: 'rgba(255, 0, 0, 0.6) none repeat scroll 0% 0%',
    minHeight: '60%',
    maxHeight: '80%',
    padding: '50px',
    marginLeft: '21%',
    borderRadius: '10px'
  }

  return (
    <div style={style}>
      <TodoForm addItem={addItem} />

      {todos.map( (todo,i) =>
        <Todo key={i} index={i} todo={todo} completeTodo={completeTodo} removeItem={removeItem} />
      )}
    </div>
  )
}
