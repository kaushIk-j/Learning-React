import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
     Redux todo 
     < AddTodo />
     <hr />
     <Todos/>
    </>
  )
}

export default App
