// Redux Saga
import { all, takeEvery } from "redux-saga/effects";

// Todos Actions Types
import TodosActionTypes from "@store/actions/todos.action-types";

// Workers
import getTodos from "./workers/getTodos.worker";

function* todosWatcher() {
  yield all([takeEvery(TodosActionTypes.GET_TODOS, getTodos)]);
}

export default todosWatcher;
