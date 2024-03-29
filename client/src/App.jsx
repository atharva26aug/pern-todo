import { useState, Fragment } from 'react'
import './App.css'

// Importing Components
import InputTodo from './components/InputTodo'
import ListTodos from './components/ListTodos'

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
        <ListTodos />
      </div>
    </Fragment>
  )
}

export default App
