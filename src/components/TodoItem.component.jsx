import React, { useState } from "react";

function TodoItem({ todoItem, handleDelete, handleComplete, handleChange }) {
  const [newTitle, setNewTitle] = useState(todoItem.title);
  const [isActive, setIsActive] = useState(false);
  function handleKeyPress({ e, id }) {
    if (e.keyCode === 13) {
      handleChange(id, newTitle);
      setIsActive(false);
    }
  }
  return (
    <li className={todoItem.isCompleted ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          value={todoItem.isCompleted}
          onChange={() => handleComplete(todoItem.id)}
        />
        {isActive ? (
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            onKeyDown={(e) => handleKeyPress({ e: e, id: todoItem.id })}
          />
        ) : (
          <label onClick={() => setIsActive(true)}>{todoItem.title}</label>
        )}
        <button
          className="destroy"
          onClick={() => handleDelete(todoItem.id)}
        ></button>
      </div>
    </li>
  );
}

export default TodoItem;
