import React from 'react'
import {TodoItem} from "./TodoItem"

export const Todos = (props) => {
    let myStyle = {
        minHeight: '70vh',
        margin: '40px auto'
    }
    function closeMessage() {
        document.querySelector('.alert').style.display = 'none';
    }
    return (
        <div className = "container my-3" style = {myStyle}>
            <div className="alert">
                <span className="closebtn" onClick= {closeMessage} > &times; </span> 
                <strong>Success!</strong> You've successfully uploaded your document. Thank You!!
            </div> 
            <h3 className="text-center">Todos List</h3>
            {props.todos.length === 0 ? "No todos to display" : 
            props.todos.map((todo) => {
                console.log(todo.sno);
                return( <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} /> )    
            })
            }      
        </div>
    )
}
