import React, { Fragment, useEffect, useState } from "react";

import EditTodos from "./EditTodos";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  console.log(BACKEND_URL);
  

  //delete todo function

  const deleteTodo = async id => {
    try {
      const deleteTodo = await fetch(`${BACKEND_URL}/todos/${id}`, {
        method: "DELETE"
      });

      setTodos(todos.filter(todo => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getTodos = async () => {
    try {
      console.log(BACKEND_URL);
      const response = await fetch(`${BACKEND_URL}/todos`);
      console.log(response);
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Fragment>
      {" "}
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {todos.map(todo => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <EditTodos todo={todo} /> 
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodos;