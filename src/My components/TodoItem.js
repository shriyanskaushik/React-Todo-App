import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    return (
        <>
        <div>
            <h3>{todo.title}</h3>
            <p>{todo.desc}</p>
            <button className = "btn btn-danger btn-sm" onClick = {()=>{onDelete(todo)}}>Delete</button>
        </div>
        <hr />
        </>
    )
}
