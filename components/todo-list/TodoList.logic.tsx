// React
import React, { useEffect } from "react";
import { ListRenderItem } from "react-native";

// React Redux
import useStateSelector from "@store/hooks/useStateSelector.hook";
import useDispatchAction from "@store/hooks/useDispatchAction.hook";
import { getTodos } from "@store/actions/todos.action-creators";

// Contracts
import ITodo from "@contracts/ITodo.contract";
import TodoCard from "./todo-card/TodoCard.view";

const TodoListLogic = () => {
  const dispatch = useDispatchAction();

  const todos = useStateSelector((s) => s.todos.todos);

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  const renderTodo: ListRenderItem<ITodo> = ({ item }) => (
    <TodoCard key={item._id} todo={item} />
  );

  return { todos, renderTodo };
};

export default TodoListLogic;
