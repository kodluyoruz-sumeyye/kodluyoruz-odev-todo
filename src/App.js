import logo from "./logo.svg";
import "./App.css";
import todoData from "./db/TodoData";
import TodoItem from "./components/TodoItem.component";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([...todoData]);
  const [filteredList, setFilteredList] = useState([...todoData]);
  function handleDelete(id) {
    setTodoList(todoList.filter((todoItem) => todoItem.id !== id));
    setFilteredList(filteredList.filter((todoItem) => todoItem.id !== id));
  }
  function handleComplete(id) {
    setTodoList(
      todoList.map((todoItem) =>
        todoItem.id === id
          ? { ...todoItem, isCompleted: !todoItem.isCompleted }
          : todoItem
      )
    );
    setFilteredList(
      filteredList.map((todoItem) =>
        todoItem.id === id
          ? { ...todoItem, isCompleted: !todoItem.isCompleted }
          : todoItem
      )
    );
  }
  function handleChange(id, title) {
    setTodoList(
      todoList.map((todoItem) =>
        todoItem.id === id ? { ...todoItem, title: title } : todoItem
      )
    );
    setFilteredList(
      filteredList.map((todoItem) =>
        todoItem.id === id ? { ...todoItem, title: title } : todoItem
      )
    );
  }
  function handleActives() {
    setFilteredList(todoList.filter((todoItem) => !todoItem.isCompleted));
  }
  function handleCompleted() {
    setFilteredList(todoList.filter((todoItem) => todoItem.isCompleted));
  }
  function handleAll() {
    setFilteredList([...todoList]);
  }
  return (
    <div className="App">
      <div className="todoapp">
        <div className="div">
          <h1>todos</h1>
          <form>
            <input
              className="new-todo"
              placeholder="What needs to be done?"
              autoFocus
            />
          </form>
        </div>
        <div className="main">
          <input className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>

          <ul className="todo-list">
            {filteredList.map((todoItem) => (
              <TodoItem
                key={todoItem.id}
                todoItem={todoItem}
                handleDelete={handleDelete}
                handleComplete={handleComplete}
                handleChange={handleChange}
              />
            ))}
          </ul>
        </div>

        <footer className="footer">
          <span className="todo-count">
            <strong>2</strong>
            items left
          </span>

          <ul className="filters">
            <li onClick={handleAll}>
              <a className="selected">All</a>
            </li>
            <li onClick={handleActives}>
              <a>Active</a>
            </li>
            <li onClick={handleCompleted}>
              <a>Completed</a>
            </li>
          </ul>

          <button className="clear-completed">Clear completed</button>
        </footer>
      </div>

      <div className="info">
        <p>Click to edit a todo</p>
        <p>
          Created by <a href="https://d12n.me/">Dmitry Sharabin</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </div>
    </div>
  );
}

export default App;
