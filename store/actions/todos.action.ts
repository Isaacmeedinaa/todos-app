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
