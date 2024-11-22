import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../Features/todoSlice';
import './AddTodo.css'

const AddTodo = () => {

    const [input,setinput] = useState("");

    const dispatch = useDispatch();

    const handleSubmit=(e)=>{
       e.preventDefault();
       dispatch(addTodo(input))
        setinput('');
    }
  return (
    <>
      <h1>Todo</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} placeholder='Enter a todo' onChange={(e)=>setinput(e.target.value)} />
        <button type='submit'>Add Task</button>
      </form>
    </>
  )
}

export default AddTodo