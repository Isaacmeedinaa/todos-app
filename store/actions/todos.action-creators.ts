// Action Types
import TodosActionTypes from "./todos.action-types";

// Actions
import { IGetTodos, ICreateTodo, IUpdateTodo } from "./todos.action";

export const getTodos = (): IGetTodos => {
  return {
    type: TodosActionTypes.GET_TODOS,
  };
};

export const createTodo = (title: string, description: string): ICreateTodo => {
  return {
    type: TodosActionTypes.CREATE_TODO,
    title: title,
    description: description,
  };
};

export const updateTodo = (
  todoId: string,
  title: string,
  description: string,
): IUpdateTodo => {
  return {
    type: TodosActionTypes.UPDATE_TODO,
    todoId: todoId,
    title: title,
    description: description,
  };
};
