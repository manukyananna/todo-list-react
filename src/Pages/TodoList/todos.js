import React from "react";
import ApiService from "../../Services/apiService";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import { FORM_KEY, TODO_LIST_KEY } from "../../Constants/urlKeys";
import AlertService from "../../Services/alertService";
import { SUCCESS_KEY } from "../../Constants/mainKeys";

const Todos = ({ todos, removeTodo }) => {
  const user = useSelector(state => state.user.currentUser);

  const deleteHandler = (todoId, todoName) => {
    if (todoId) {
      AlertService.alertConfirm(`Are you sure to delete ${todoName}`).then(() => {
        ApiService.deleteTodo(`${user.firstName}${user.lastName}`, todoId).then(response => {
          if (response && response.data.ok) {
            AlertService.alert(SUCCESS_KEY, 'Todo deleted.');
            removeTodo(todoId);
          }
        })
      })
    }
  }

  return todos && todos.length ? <div className="todo-list-wrapper">
    {
      todos.map(todo => <div key={todo._id} className="todo-item" >
        <div className="content-wrapper">
          <h5><span style={{ backgroundColor: todo.color }}></span>{todo.title}</h5>
          <div className="actions-wrapper">
            <Link to={`/${TODO_LIST_KEY}/${FORM_KEY}/${todo._id}`} className="btn-default mr-2 icon-btn edit" title="Edit Todo" >
              <i className="far fa-edit"></i>
            </Link>
            <Link to="#" className="btn-default icon-btn delete" title="Delete Todo" onClick={() => deleteHandler(todo._id, todo.title)}>
              <i className="far fa-trash-alt"></i>
            </Link>
          </div>
        </div>
        <p>{todo.description}</p>
      </div>)
    }
  </div> : <h4 className="mt-4 text-center empty-message">Your Todo list is empty.</h4>;
}

export default Todos;