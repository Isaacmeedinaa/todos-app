// Redux Saga
import { all, takeEvery } from "redux-saga/effects";

// Todos Actions Types
import TodosActionTypes from "@store/actions/todos.action-types";

// Workers
import getTodos from "./workers/getTodos.worker";
import createTodo from "./workers/createTodo.worker";
import updateTodo from "./workers/updateTodo.worker";
import deleteTodo from "./workers/deleteTodo.worker";

function* todosWatcher() {
  yield all([
    takeEvery(TodosActionTypes.GET_TODOS, getTodos),
    takeEvery(TodosActionTypes.CREATE_TODO, createTodo),
    takeEvery(TodosActionTypes.UPDATE_TODO, updateTodo),
    takeEvery(TodosActionTypes.DELETE_TODO, deleteTodo),
  ]);
}

export default todosWatcher;
