
import React,{useContext,useState} from 'react'
import {DataContext} from './DataProvider'
export default function Footer() {
  const[checkAll,setCheckAll]=useState(false)
  const[todos,setTodos]=useContext(DataContext)
  const handelCheckAll=()=>{
  


    const newTodo=[...todos]
    newTodo.forEach(todo=>{
      todo.complate=!checkAll
    })
    setTodos(newTodo)
    setCheckAll(!checkAll)
  }

  const newTodoComplite=()=>{
    return todos.filter(todo=>todo.complate === false)
  }

  const deleteTodo=()=>{
  
    setTodos(newTodoComplite())
    setCheckAll(false)
  }
    return (

      <>
      {
        todos.length === 0 ? <h2>congratulations! Noting to do </h2>:
         
        <div className="row">
        <label htmlFor="all">
          <input type="checkbox" name="all" id="all"
          onChange={handelCheckAll} checked={checkAll}
          />
          ALL
        </label>
        <p>You Have {newTodoComplite().length} to do</p>
        <button id="delete" onClick={deleteTodo}>Delete</button>
    </div>
      }
      </>
     
    )
}
