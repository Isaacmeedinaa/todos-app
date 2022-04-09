// Redux Toolkit
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Types
import { TodosState } from "./todos.types";

// Actions
import { ISetTodos } from "@store/actions/todos.action";

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
    addTodo(state) {},
    updateTodo(state) {},
    removeTodo() {},
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
  updateTodo,
  removeTodo,
} = todosSlice.actions;

export default todosSlice.reducer;
