// Action Types
import TodosActionTypes from "./todos.action-types";

// Actions
import { IGetTodos } from "./todos.action";

export const getTodos = (): IGetTodos => {
  return {
    type: TodosActionTypes.GET_TODOS,
  };
};
