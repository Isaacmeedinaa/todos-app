// Redux Saga
import { call, put } from "redux-saga/effects";
import { SagaIterator } from "redux-saga/index";

// Actions
import {
  setIsFetchingTodo,
  setIsNotFetchingTodo,
  setTodos,
} from "@store/slices/todos.slice";

// API Service
import todosAPI from "@services/todos.api";

// Contracts
import ITodo from "@contracts/ITodo.contract";

// Libraries
import { AxiosError, AxiosResponse } from "axios";

function* getTodos(): SagaIterator {
  try {
    // starts the loader
    yield put(setIsFetchingTodo());

    // Calls the backend API
    const getTodosRes: AxiosResponse = yield call(todosAPI.getTodos);

    // Gets the response data and sets it to a variable
    const todos: ITodo[] = getTodosRes.data;

    // Sets the todos to the Redux state
    yield put(setTodos({ todos: todos }));

    // Stops the loader
    yield put(setIsNotFetchingTodo());
  } catch (err: any) {
    const error: AxiosError = err;

    yield put(setIsNotFetchingTodo());

    console.log(error);
  }
}

export default getTodos;
