import React, { useState } from "react";
import "./TodoList.css";

function TodoList() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInput = (e) => {
    setTodo(e.target.value);
  };

  // const handleAddTodos = (e) => {
  //   // Here list data is handled asyncronously
  //   e.preventDefault();
  //   setTodos([...todos, todo]);
  //   setTodo("");
  //   console.log("todos : ", todos);
  // };

  const handleAddTodos = (e) => {
    // Here list data is handled syncronously
    e.preventDefault();
    setTodos((todos) => {
      const updatedList = [...todos, todo];
      console.log("updatedList ", [...todos, todo]);
      return updatedList;
    });

    setTodo("");
    console.log("todos : ", todos);
  };

  const handleDeleteBtn = (index) => {
    const filteredTodos = todos.filter((_, id) => index !== id);
    setTodos(filteredTodos);
  };

  const handleRemoveAll = () => {
    setTodos([]);
  };

  return (
    <div className="todo">
      <h2>TodoList</h2>
      <form onSubmit={(e) => e.stopPropagation()}>
        <input
          type="text"
          placeholder="Enter todo"
          value={todo}
          onChange={(e) => handleInput(e)}
        />
        <button onClick={handleAddTodos}>Add todo</button>
      </form>
      <div>
        <ul>
          {todos !== [] &&
            todos.map((item, index) => (
              <div className="todo__item" key={index}>
                <li>{item}</li>
                <button onClick={() => handleDeleteBtn(index)}>Delete</button>
              </div>
            ))}
        </ul>
        <div>
          {todos.length >= 1 && (
            <button onClick={handleRemoveAll}>Remove All</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
