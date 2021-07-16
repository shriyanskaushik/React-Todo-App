import React from 'react'

export const HookTodo = (props) => {
    return (
        <div>
            <span style={{ color : props.todo.complete ? 'green' : 'red'}} >{props.todo.name}</span><br />
            <button className="hook-button" onClick = {() => props.dispatch( {type : 'toggleTodo', payload : { id : props.todo.id } }) }> Toggle </button>
            <button className="hook-button" onClick = {() => props.dispatch( {type : 'deleteTodo', payload : { id : props.todo.id } }) }>Delete</button>
            <hr className="hr" />
        </div>
    )
}
