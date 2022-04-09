// Redux Saga
import { call, put } from "redux-saga/effects";
import { SagaIterator } from "redux-saga/index";

// Action Creators
import {
  setIsCreatingTodo,
  setIsNotCreatingTodo,
  addTodo,
} from "@store/slices/todos.slice";

// Actions
import { ICreateTodo } from "@store/actions/todos.action";

// API Service
import todosAPI from "@services/todos.api";

// Contracts
import ITodo from "@contracts/ITodo.contract";

// Libraries
import { AxiosError, AxiosResponse } from "axios";

// Navigation
import { navigate } from "@navigation/RootNavigation";
import RootStackNavigatorScreenNames from "@navigation/root-stack-navigator/RootStackNavigator.screen-names";

function* createTodo({ title, description }: ICreateTodo): SagaIterator {
  try {
    // starts the loader
    yield put(setIsCreatingTodo());

    // Calls the backend API
    const createTodoRes: AxiosResponse = yield call(
      todosAPI.createTodo,
      title,
      description,
    );

    // Gets the response data and sets it to a variable
    const todo: ITodo = createTodoRes.data;

    // Sets the todos to the Redux state
    yield put(addTodo({ todo: todo }));

    // Stops the loader
    yield put(setIsNotCreatingTodo());

    navigate(RootStackNavigatorScreenNames.TODO_LIST, undefined);
  } catch (err: any) {
    const error: AxiosError = err;

    yield put(setIsNotCreatingTodo());

    console.log(error);
  }
}

export default createTodo;
