import { useState } from 'react'
import './App.css'
import AddTodo from './component/AddTodo'
import TodoList from './component/TodoList'

function App() {


  return (
    <>
      <AddTodo/>
      <TodoList/>
    </>
  )
}

export default App
