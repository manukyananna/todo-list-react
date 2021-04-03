import React from "react";
import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { FORM_KEY, TODO_LIST_KEY } from "../Constants/urlKeys";
import TodoForm from "../Pages/TodoForm/todoForm";
import TodoListView from "../Pages/TodoList/todoListView";

const BaseRoutes = () => {
  return <Switch>
    <Route path={`/${TODO_LIST_KEY}`} exact component={TodoListView} />
    <Route path={`/${TODO_LIST_KEY}/${FORM_KEY}`} exact component={TodoForm} />
    <Route path={`/${TODO_LIST_KEY}/${FORM_KEY}/:todoId`} exact component={TodoForm} />

    <Redirect to={`/${TODO_LIST_KEY}`} />
  </Switch>;
}

export default BaseRoutes;