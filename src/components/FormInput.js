import React, {useEffect,useContext, useState,useRef} from 'react'
import { DataContext } from './DataProvider'

export default function FormInput() {
  const [todos,settodos]=useContext(DataContext);
  const [todosName,setTodosName]=useState('');
  const todoInput=useRef();
  
  const AddTodo=e=>{
    e.preventDefault();
    settodos([...todos,{name:todosName,complate:false}])
    setTodosName('')
    todoInput.current.focus();
  }
    useEffect(()=>{
        todoInput.current.focus();
    },[])


    return (
        
      <form autoComplete="off" onSubmit={AddTodo}>
        <input type="text" name="todos" id="todos"
        required placeholder="what need to be done?" ref={todoInput}
        value={todosName} onChange={e=>setTodosName(e.target.value.toLowerCase())}
        />
        <button type="submit">Create</button>
      </form>
      
    )
}
