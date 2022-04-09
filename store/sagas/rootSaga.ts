// Saga
import { all } from "redux-saga/effects";

import todosWatcher from "./todos/todos.watcher";

function* rootSaga() {
  yield all([todosWatcher()]);
}

export default rootSaga;
