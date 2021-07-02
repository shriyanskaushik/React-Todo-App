import React, { useState } from 'react'

export const AddTodo = (props) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        //console.log(title, desc) 
        if(!title || !desc){
            alert("Please fill both Title and Description");
            
        }
        else{
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");
        }        
    }

    return (
        <div className="container my-3">
            <h3 className="text-center">Add new todo</h3>
            <form onSubmit = {submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} id="title" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" className="form-control" value={desc} onChange={(e) => setDesc(e.target.value)} id="desc"/>
                </div>
                <button type="submit" className="btn btn-success btn-sm">Submit</button>
            </form>
        </div>
    )
}
