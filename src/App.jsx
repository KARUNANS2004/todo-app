import { useState, useEffect } from "react"
import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"

function App() {
  // const todos=[
  //   {input:'Hello add your first todo',complete:true},
  //   {input:'Get the grocesries!',complete:false},
  //   {input:'Learn how to web design',complete:false},
  //   {input:'Say hi to the gran gran',complete:true},
  // ]
  // --------------Now we will make this todos dynamic by using (usestate)--------------------
  // setTodos is the setter function for todos
  // todos is the variable name we are using useState for
      // the setter functions are designed to update the value automatically*********************

  
  const [todos, setTodos]=useState([])

  
  // now we will define the second statefull variable for tabs
  const [selectedTabs,setSelectedTabs]=useState('Open')

  // -------------- Handler functions for todo---------------
  function handleAddTodo(newTodo){
    const newTodoList=[...todos, {input:newTodo,complete:false}]
    setTodos(newTodoList)
    handleSavedData(newTodoList)
  }


  function handleCompleteTodo(index){
    let newTodoList=[...todos]
    let completeTodo=newTodoList[index]
    completeTodo['complete']=true
    newTodoList[index]=completeTodo
    setTodos(newTodoList)
    handleSavedData(newTodoList)
  }

  function handleDeleteTodo(index){
    let newTodoList=todos.filter((val,valIndex)=>{
      return valIndex!==index
    })
    setTodos(newTodoList)
    handleSavedData(newTodoList)
  }

  // the useEffect takes two arguments, (1) is an arrow function and (2) is a dependency array
  useEffect(()=>{
    if(!localStorage || !localStorage.getItem('todo-app')){
      return 
    }
    let db=JSON.parse(localStorage.getItem('todo-app'))
    setTodos(db.todos)
  }, [])

  //  to make this auto save work we have to make a save function also 
  function handleSavedData(currentTodos){
    localStorage.setItem('todo-app', JSON.stringify({todos:currentTodos}))
  }

  // props-> when we define something in a parent and we give that thing down to its different children components for access
  // This is done by giving properties to tags as attributes;(Like we added todos in them)

  return (
    // React fragments(empty divs)
    <>
      <Header todos={todos}/> 
      <Tabs selectedTab={selectedTabs} setSelectedTab={setSelectedTabs} todos={todos}/>
      <TodoList 
                selectedTab={selectedTabs} 
                todos={todos} 
                handleDeleteTodo={handleDeleteTodo} 
                handleCompleteTodo={handleCompleteTodo}
      />
      <TodoInput handleAddTodo={handleAddTodo}/>
    </>
  )
}

export default App


// now to save the todolist and not let its data got reset on refreshing the page we have 2 ways:-
//(1)-> using JSON database
// (2)-> using react hook named [useEffect]