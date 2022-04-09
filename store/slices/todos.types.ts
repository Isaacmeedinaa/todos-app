// Contracts
import ITodo from "@contracts/ITodo.contract";

export type TodosState = {
  todos: ITodo[];
  isFetchingTodos: "idle" | "loading";
  isCreatingTodo: "idle" | "loading";
  isUpdatingTodo: "idle" | "loading";
  isDeletingTodo: "idle" | "loading";
};
