import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import uuid from "react-uuid";
import Input from "../../Components/Input/input";
import Textarea from "../../Components/Textarea/textarea";
import ApiService from "../../Services/apiService";
import AlertService from "../../Services/alertService";
import SubmitButton from "../../Components/Button/submitButton";
import { addButtonSpinner, addPageSpinner, removeButtonSpinner, removePageSpinner } from "../../Store/Actions/spinner";
import { SUCCESS_KEY } from "../../Constants/mainKeys";
import { TODO_LIST_KEY } from "../../Constants/urlKeys";

const TodoForm = props => {
  const dispatch = useDispatch();
  const submitSpinnerId = uuid();

  const user = useSelector(state => state.user.currentUser);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [color, setColor] = useState('#F3F3F3');
  const [todoId, setTodoId] = useState(null);
  const [isInValidSubmit, setIsInvalidSubmit] = useState(false);

  useEffect(() => {
    if (props.match.params.todoId) {
      const spinnerId = uuid();
      setPageSpinner(spinnerId);
      ApiService.getTodoById(`${user.firstName}${user.lastName}`, props.match.params.todoId).then(response => {
        if (response) {
          const todoData = response.data;
          setColor(todoData.color);
          setDescription(todoData.description);
          setTitle(todoData.title);
          setTodoId(response.data._id);
          extractPageSpinner(spinnerId);
        }
      });
    }
  }, []);

  const submitHandler = event => {
    event.preventDefault();
    if (title && description && color) {
      setButtonSpinner(submitSpinnerId);
      const form = { title, description, color };
      (todoId
        ? ApiService.updateTodo(`${user.firstName}${user.lastName}`, form, todoId)
        : ApiService.createTodo(`${user.firstName}${user.lastName}`, form)
      ).then(response => {
        if(response && response.data._id) {
          AlertService.alert(SUCCESS_KEY, todoId ? 'Data updated' : 'Todo created');
          extractButtonSpinner(submitSpinnerId);
          props.history.push(`/${TODO_LIST_KEY}`);
        }
      });
    } else {
      setIsInvalidSubmit(true);
    }
  }

  const setPageSpinner = useCallback(spinnerId => {
    spinnerId && dispatch(addPageSpinner(spinnerId));
  });

  const extractPageSpinner = useCallback(spinnerId => {
    spinnerId && dispatch(removePageSpinner(spinnerId));
  });

  const setButtonSpinner = useCallback(spinnerId => {
    spinnerId && dispatch(addButtonSpinner(spinnerId));
  });

  const extractButtonSpinner = useCallback(spinnerId => {
    spinnerId && dispatch(removeButtonSpinner(spinnerId));
  });

  return <section className="section">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-md-8 col-12">
              <div className="form-wrapper">
                <div className="form-title">
                  <h1>
                    <Link to={`/${TODO_LIST_KEY}`}><i className="fas fa-arrow-circle-left"></i></Link>
                    {todoId ? "Edit Todo" : "Add Todo"}
                  </h1>
                  <hr />
                </div>
                <form onSubmit={submitHandler}>
                  <Input
                    id="title"
                    type="text"
                    labelValue="Title *"
                    value={title}
                    fail={isInValidSubmit && !title}
                    changed={event => setTitle(event.target.value)}
                  />
                  <Textarea
                    id="description"
                    rows="3"
                    labelValue="Description *"
                    value={description}
                    fail={isInValidSubmit && !description}
                    changed={event => setDescription(event.target.value)}
                  />
                  <Input
                    id="color"
                    type="color"
                    labelValue="Color *"
                    value={color}
                    isDefaultStyle={true}
                    fail={isInValidSubmit && !color}
                    changed={event => setColor(event.target.value)}
                  />
                  <div className=" text-right mt-2">
                    <SubmitButton name={todoId ? "Edit" : "Add"} spinnerId={submitSpinnerId} />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>;
}

export default withRouter(TodoForm);