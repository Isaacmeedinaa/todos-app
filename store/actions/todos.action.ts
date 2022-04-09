// Contracts
import ITodo from "@contracts/ITodo.contract";

// Action Types
import TodosActionTypes from "./todos.action-types";

export interface IGetTodos {
  type: TodosActionTypes.GET_TODOS;
}

export interface ISetTodos {
  todos: ITodo[];
}

export interface ICreateTodo {
  type: TodosActionTypes.CREATE_TODO;
  title: string;
  description: string;
}

export interface IAddTodo {
  todo: ITodo;
}

export interface IUpdateTodo {
  type: TodosActionTypes.UPDATE_TODO;
  todoId: string;
  title: string;
  description: string;
}

export interface IReplaceTodo {
  todoId: string;
  todo: ITodo;
}

export interface IDeleteTodo {
  type: TodosActionTypes.DELETE_TODO;
  todoId: string;
}

export interface IRemoveTodo {
  todoId: string;
}
