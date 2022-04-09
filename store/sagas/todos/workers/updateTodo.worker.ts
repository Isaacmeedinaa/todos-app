// Redux Saga
import { call, put } from "redux-saga/effects";
import { SagaIterator } from "redux-saga/index";

// Action Creators
import {
  setIsUpdatingTodo,
  setIsNotUpdatingTodo,
  replaceTodo,
} from "@store/slices/todos.slice";

// Actions
import { IUpdateTodo } from "@store/actions/todos.action";

// API Service
import todosAPI from "@services/todos.api";

// Contracts
import ITodo from "@contracts/ITodo.contract";

// Libraries
import { AxiosError, AxiosResponse } from "axios";

// Navigation
import { navigate } from "@navigation/RootNavigation";
import RootStackNavigatorScreenNames from "@navigation/root-stack-navigator/RootStackNavigator.screen-names";

function* updateTodo({
  todoId,
  title,
  description,
}: IUpdateTodo): SagaIterator {
  try {
    // starts the loader
    yield put(setIsUpdatingTodo());

    // Calls the backend API
    const updateTodoRes: AxiosResponse = yield call(
      todosAPI.updateTodo,
      todoId,
      title,
      description,
    );

    // Gets the response data and sets it to a variable
    const todo: ITodo = updateTodoRes.data;

    // Sets the todos to the Redux state
    yield put(replaceTodo({ todoId: todo._id, todo: todo }));

    // Stops the loader
    yield put(setIsNotUpdatingTodo());

    navigate(RootStackNavigatorScreenNames.TODO_LIST, undefined);
  } catch (err: any) {
    const error: AxiosError = err;

    yield put(setIsNotUpdatingTodo());

    console.log(error);
  }
}

export default updateTodo;
