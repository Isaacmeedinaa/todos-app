// Redux Saga
import { call, put } from "redux-saga/effects";
import { SagaIterator } from "redux-saga/index";

// Action Creators
import {
  setIsDeletingTodo,
  setIsNotDeletingTodo,
  removeTodo,
} from "@store/slices/todos.slice";

// Actions
import { IDeleteTodo } from "@store/actions/todos.action";

// API Service
import todosAPI from "@services/todos.api";

// Contracts
import ITodo from "@contracts/ITodo.contract";

// Libraries
import { AxiosError, AxiosResponse } from "axios";

// Navigation
import { navigate } from "@navigation/RootNavigation";
import RootStackNavigatorScreenNames from "@navigation/root-stack-navigator/RootStackNavigator.screen-names";

function* deleteTodo({ todoId }: IDeleteTodo): SagaIterator {
  try {
    // starts the loader
    yield put(setIsDeletingTodo());

    // Calls the backend API
    const deleteTodoRes: AxiosResponse = yield call(
      todosAPI.deleteTodo,
      todoId,
    );

    // Gets the response data and sets it to a variable
    const todo: ITodo = deleteTodoRes.data;

    // Sets the todos to the Redux state
    yield put(removeTodo({ todoId: todo._id }));

    // Stops the loader
    yield put(setIsNotDeletingTodo());

    navigate(RootStackNavigatorScreenNames.TODO_LIST, undefined);
  } catch (err: any) {
    const error: AxiosError = err;

    yield put(setIsNotDeletingTodo());

    console.log(error);
  }
}

export default deleteTodo;
