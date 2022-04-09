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

// Navigation
import { useNavigation, NavigationProp } from "@react-navigation/native";
import RootStackNavigatorParamList from "@navigation/root-stack-navigator/RootStackNavigator.params";
import RootStackNavigatorScreenNames from "@navigation/root-stack-navigator/RootStackNavigator.screen-names";

const TodoListLogic = () => {
  const { navigate } =
    useNavigation<NavigationProp<RootStackNavigatorParamList>>();

  const dispatch = useDispatchAction();

  const todos = useStateSelector((s) => s.todos.todos);

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  const renderTodo: ListRenderItem<ITodo> = ({ item }) => (
    <TodoCard key={item._id} todo={item} />
  );

  const onAddNewNoteBtn = () => {
    navigate(RootStackNavigatorScreenNames.TODO_FORM);
  };

  return { todos, renderTodo, onAddNewNoteBtn };
};

export default TodoListLogic;
