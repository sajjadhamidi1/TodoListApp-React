import React,{useState} from 'react'
import { DataProvider } from './DataProvider'
export default function ListItem({todo,id,cheackComplete,handelEditTodos}) {
  const[onEdit,setOnEdit]=useState(false)
  const[editValue,setEditValue]=useState(todo.name)
  const handelOnEdit=()=>{
      setOnEdit(true)
  }
  const handelSave=id=>{
    setOnEdit(false)
    if(editValue){
      handelEditTodos(editValue,id)
    }
  }
  if(onEdit){
    return (
      <li>
        <input type="text" id='setEditValue' value={editValue}
        name="editValue" onChange={e=>setEditValue(e.target.value.toLowerCase())}/>
      <button onClick={()=>handelSave(id)}>Save</button>
    </li>
  )
  }else{
    return (
      <li>
      <label htmlFor={id} className= {todo.complate ? "active":"" } >
        <input type="checkbox" id={id} checked={todo.complate} 
        onChange={()=>cheackComplete(id)}/>
        {todo.name}
      </label>
      <button disabled={todo.complate} onClick={handelOnEdit} >Edit</button>
    </li>
  )
  }
   
}
