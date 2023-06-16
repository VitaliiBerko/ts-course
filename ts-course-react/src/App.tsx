import { FC, useState } from 'react'

import './App.css'
// import ToDoList from './components/ToDiList'
import ToDoListFC from './components/ToDoListFC'
import AddToDo from './components/AddToDo'
import { IItem } from './components/types/todo'

const App: FC =()=> {
  // const toDos= [{id: '1', title: "First toDo"}, {id: '2', title: "Second toDo"}]

const [todos, setTodos]=useState<IItem[]>([])
const todoAddHandler= (todo: IItem)=> {
  setTodos((prevTodos)=>{
    return [
      ... prevTodos, {
        id: Math.random().toString(), title: todo.title
      }
    ]
  })
}

const todoRemoveHandler= (id: string)=> {
  setTodos((prevTodos)=>{
    return  prevTodos.filter((item)=>{
      return item.id!==id
    })  
    
  })
}

  return (
    <>
      <AddToDo onAddTodo={todoAddHandler}/>
      {/* <ToDoList toDos={toDos}/> */}
      <ToDoListFC onRemoveTodo={todoRemoveHandler} toDos={todos}/>
    </>
  )
}

export default App
