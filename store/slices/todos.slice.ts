// Redux Toolkit
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Types
import { TodosState } from "./todos.types";

// Actions
import {
  IAddTodo,
  ISetTodos,
  IReplaceTodo,
  IRemoveTodo,
} from "@store/actions/todos.action";

const initialState: TodosState = {
  todos: [],
  isFetchingTodos: "idle",
  isCreatingTodo: "idle",
  isUpdatingTodo: "idle",
  isDeletingTodo: "idle",
};

const todosSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    setIsFetchingTodo(state) {
      state.isFetchingTodos = "loading";
    },
    setIsNotFetchingTodo(state) {
      state.isFetchingTodos = "idle";
    },
    setIsCreatingTodo(state) {
      state.isCreatingTodo = "loading";
    },
    setIsNotCreatingTodo(state) {
      state.isCreatingTodo = "idle";
    },
    setIsUpdatingTodo(state) {
      state.isUpdatingTodo = "loading";
    },
    setIsNotUpdatingTodo(state) {
      state.isUpdatingTodo = "idle";
    },
    setIsDeletingTodo(state) {
      state.isDeletingTodo = "loading";
    },
    setIsNotDeletingTodo(state) {
      state.isDeletingTodo = "idle";
    },
    setTodos(state, action: PayloadAction<ISetTodos>) {
      state.todos = action.payload.todos;
    },
    addTodo(state, action: PayloadAction<IAddTodo>) {
      const newTodos = [...state.todos, action.payload.todo];
      state.todos = newTodos;
    },
    replaceTodo(state, action: PayloadAction<IReplaceTodo>) {
      const todoIdx = state.todos.findIndex(
        (todo) => todo._id === action.payload.todoId,
      );
      state.todos[todoIdx] = action.payload.todo;
    },
    removeTodo(state, action: PayloadAction<IRemoveTodo>) {
      const newTodos = state.todos.filter(
        (todo) => todo._id !== action.payload.todoId,
      );
      state.todos = newTodos;
    },
  },
});

export const {
  setIsFetchingTodo,
  setIsNotFetchingTodo,
  setIsCreatingTodo,
  setIsNotCreatingTodo,
  setIsUpdatingTodo,
  setIsNotUpdatingTodo,
  setIsDeletingTodo,
  setIsNotDeletingTodo,
  setTodos,
  addTodo,
  replaceTodo,
  removeTodo,
} = todosSlice.actions;

export default todosSlice.reducer;
