import React,{useContext} from 'react'
import ListItem from './ListItem'
import {DataContext} from './DataProvider'
export default function List() {
     const [todos,setTodos]=useContext(DataContext)
     const swichComplite=id=>{
         
        const newtodos=[...todos]
        newtodos.forEach((todo,index)=>{
            if(index === id){
                todo.complate = !todo.complate
            }
        })
        setTodos(newtodos)
     }
     
    const handelEditTodos=(editvalue,id)=>{
        const newtodos=[...todos]
        newtodos.forEach((todo,index)=>{
            if(index===id){
                todo.name=editvalue
            }
            setTodos(newtodos)
        })
    }
    return (
        <ul>
         {
             todos.map((todo,index)=>(
                <ListItem todo={todo} key={index} id={index}
                
                cheackComplete={swichComplite} handelEditTodos={handelEditTodos}/>
             ))
         }
 
      </ul>

    )
}
