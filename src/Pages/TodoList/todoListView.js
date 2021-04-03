import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import uuid from "react-uuid";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import ApiService from "../../Services/apiService";
import Todos from "./todos";
import { FORM_KEY, TODO_LIST_KEY } from "../../Constants/urlKeys";
import { addPageSpinner, removePageSpinner } from "../../Store/Actions/spinner";

const TodoListView = () => {
  const dispatch = useDispatch();

  const user = useSelector(state => state.user.currentUser);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const spinnerId = uuid();
    setPageSpinner(spinnerId);
    ApiService.getTodos(`${user.firstName}${user.lastName}`).then(response => {
      if(response && response.data) {
        setTodos(response.data);
        extractPageSpinner(spinnerId);
      }
    }).catch(() => extractPageSpinner(spinnerId));
  }, [ ]);

  const removeTodoHandler = (todoId) => {
    setTodos(todos.filter(data => data._id !== todoId));
  }

  const setPageSpinner = useCallback(spinnerId => {
    spinnerId && dispatch(addPageSpinner(spinnerId));
  });

  const extractPageSpinner = useCallback(spinnerId => {
    spinnerId && dispatch(removePageSpinner(spinnerId));
  });

  return <section className="section">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-12 mb-3">
              <h1 className="page-title">Todos</h1>
            </div>
            <div className="col-12">
              <Link to={`/${TODO_LIST_KEY}/${FORM_KEY}`} className="btn-default" >
                <i className="fas fa-plus mr-1"></i> Add Todo
              </Link>
            </div>
            <div className="col-lg-9 col-12">
              <Todos todos={todos} removeTodo={removeTodoHandler} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>;
}

export default TodoListView;