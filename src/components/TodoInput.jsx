import { useState } from "react"

export function TodoInput(props){
    const {handleAddTodo}=props
    const [inputValue, setInputValue]=useState('');
    // the setter functions are designed to update the value automatically

    return (
        <div className="input-container">
            <input value={inputValue} onChange={(event)=>{setInputValue(event.target.value)}} placeholder="Add task" />
            <button onClick={()=>{
                if(!inputValue) {return}
                handleAddTodo(inputValue)
                setInputValue('')
            }}>
            <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}