import React, { useState, useEffect, useRef, useMemo, useCallback, useReducer } from 'react';

import { HookTodo } from "./hookTodo";
import {List} from './List';
import './Hooks.css';

export const Hook = () => {

    const [count, setCount] = useState(1);

    const [name, setName] = useState('');
    const prevName = useRef('');

    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    const [callbackNumber, setCallbackNumber] = useState(1);
    const [callbackDark, setCallbackDark] = useState(false);

    const reducer = (todos, action) => {
        switch (action.type) {
            case 'addTodo':
                return [...todos, newTodo(action.payload.name)]
            case 'toggleTodo':
                return todos.map((todo) => {
                    if (todo.id === action.payload.id){
                        return {...todo , complete : !todo.complete}
                    }
                    return todo
                })
            case 'deleteTodo':
                return todos.filter(todo => {
                    return todo.id !== action.payload.id
                })
            default:
                break;
        }
    };

    const newTodo = (name) => {
        return { id:Date.now(), name : name, complete : false }
    }

    const [todos, dispatch] = useReducer(reducer, []);
    const [todoName, setTodoName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type : 'addTodo', payload : {name : todoName } });
        setTodoName('')
    }

    console.log(todos);

    // -------------UseState---------------

    const incrementNumber = () => {
        return setCount((prevCount) => {
            return prevCount + 1;
        });
    };

    const decrementNumber = () => {
        return setCount((prevCount) => {
            return prevCount - 1;
        });
    };

    // ----------useEffect--------------

    const [status, setStatus] = useState('Post');

    const setPostStatus = () => {
        return setStatus('Posts');
    };

    const setCommentStatus = () => {
        return setStatus('Comments');
    };



    const setUserStatus = () => {
        return setStatus('Users');
    };

    useEffect(() => {
        return setCount((prevCount) => {
            return prevCount + 1;
        });
    }, [status]);

    useEffect(() => {
        prevName.current = name
    }, [name]);

    // ------------useMemo--------------

    const doubleNumber = useMemo(() => {
        return slowFunction(number);
    },[number]);

    const themeStyle = useMemo(() => {
        return {
            width : '120px',
            backgroundColor : dark ? 'black' : 'white',
            color : dark ? 'white' : 'black'
        };
    }, [dark])

    useEffect(() => {
        console.log("Theme changed");
    }, [themeStyle])

    function slowFunction(number){
        for (let index = 0; index < 1000000000; index++) {}
        return number * 2;
    }

    // -----------useCallback--------------

    const callbackThemeStyle = {
        backgroundColor : callbackDark ? 'black' : 'white',
        color : callbackDark ? 'white': 'black'
    }

    const getItems = useCallback(() => {
        return [callbackNumber + 1, callbackNumber + 2, callbackNumber + 3]
    },[callbackNumber]);

    return (
        <div className="mainData">
            <h2>---------useState Hook---------</h2>
            <br /><br />
            <div className="updown">
                <button onClick = {incrementNumber} className="hook-button">+</button>
                <span>{count}</span>
                <button onClick = {decrementNumber} className="hook-button">-</button>
            </div>

            <h2>---------useEffect Hook---------</h2>
            <br /><br />
            <div className="updown">
                <button onClick = {setPostStatus} className="hook-button">Post</button>
                <button onClick = {setUserStatus} className="hook-button">User</button>
                <button onClick = {setCommentStatus} className="hook-button">Comment</button>
                <br /><br />
                <span id="change">The number will only be incremented whenever a new button is clicked.</span>
            </div>

            <h2>---------useRef Hook---------</h2>
            <br /><br />
            <div className="updown">
                <input value = {name} onChange = {e => setName(e.target.value)} className="hook-input" />
                <div>My name is  {name}  and used to be {prevName.current}</div>
            </div>

            <h2>---------useMemo Hook---------</h2>
            <br /><br />
            <div className="updown">
                <input value = {number} onChange = {e => setNumber(parseInt(e.target.value))} className="hook-input" type="number" />
                <br />
                <button onClick = {() => setDark(prevDark => !prevDark)} className="hook-button">Change Theme</button>
                <br />
                <span style={themeStyle}>{doubleNumber}</span>
            </div>

            <h2>---------useCallback Hook---------</h2>
            <br /><br />
            <div className="updown">
                <input value = {callbackNumber} onChange = {e => setCallbackNumber(parseInt(e.target.value))} className="hook-input" type="number" />
                <br />
                <button onClick = {() => setCallbackDark(prevDark => !prevDark)} className="hook-button">Change Theme</button>
                <br />
                <div style = {callbackThemeStyle}>
                <List getItems = {getItems} />
                </div>
            </div>

            <h2>---------useReducer Hook---------</h2>
            <br /><br />
            <div className="updown" id = "reducer">
                <form onSubmit = {handleSubmit}>
                    <input type="text" value = {todoName} className="hook-input" onChange = {e => setTodoName(e.target.value)} />
                </form> <br /><br />
                {todos.map(todo => {
                    return <HookTodo key = {todo.id}  todo = {todo} dispatch = {dispatch} />
                })}
            </div>

        </div>
    )
}
