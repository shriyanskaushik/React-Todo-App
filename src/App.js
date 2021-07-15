import './App.css';
import Header from './My components/Header'
import { Todos } from './My components/Todos'
import { Footer } from './My components/Footer'
import { About } from './My components/About'
import { AddTodo } from "./My components/AddTodo";
import { PopUpWidget } from './My components/PopUpWidget'
import { Hook } from "./My components/Hook";
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    // console.log("I am on delete of todo", todo);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    //console.log("I am adding this todo", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const newTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, newTodo]);
    // console.log(newTodo);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Router>
        <Header title="My Todo List" searchBar={true} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
                <PopUpWidget />
              </>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path = "/hooks">
            <Hook />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;