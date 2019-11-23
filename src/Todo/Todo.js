import React, { useState } from 'react';

export default function Todo( {todo, index, completeTodo, removeItem} ) {

  const style = {
    background: todo.isCompleted ? '#ccc' : '#fff',
    boxShadow: '2px 2px 1px rgba(0, 0, 0, 0.15)' ,
    padding: '10px 30px',
    fontSize: '24px',
    margin: '10px',
    borderRadius: '3px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    textDecoration: todo.isCompleted ? 'line-through' : ''
  }

  return (
    <div style={style}>
      {todo.item}

      <div>
        <button onClick={() => completeTodo(index)}>Done</button>
        <button onClick={() => removeItem(index)}>Remove</button>
      </div>
    </div>
  )
}
