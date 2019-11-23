import React, { useState } from 'react'

export default function TodoForm({addItem}) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (value.trim() === '') {
      return;
    }

    addItem(value.trim());
    setValue('');
  }

  const style = {
    boxShadow: '2px 2px 1px rgba(0, 0, 0, 0.15)' ,
    padding: '10px 30px',
    fontSize: '24px',
    margin: '10px',
    borderRadius: '3px',
    width: '90%'
  }

  return (
    <form onSubmit={handleSubmit}>
      <input style={style} type="text" value={value} placeholder="type and press enter" onChange={e => setValue(e.target.value)} />
    </form>
  )
}
