import React ,{useState,useEffect,createContext} from 'react'

export const DataContext=createContext();

 export const DataProvider = (props) => {
    const [todos, setTodos]=useState([

        
    ])
    useEffect(()=>{
        const todosstore=JSON.parse(localStorage.getItem('todosstore'))
        if(todosstore) setTodos(todosstore)
    },[])
    useEffect(()=>{
        localStorage.setItem('todosstore',JSON.stringify(todos))
    },[todos])

  
    return (
        <DataContext.Provider value={[todos,setTodos]}>
            {props.children}
        </DataContext.Provider>
    )
}

