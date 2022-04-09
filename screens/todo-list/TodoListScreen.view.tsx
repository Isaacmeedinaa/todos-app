// React
import React from "react";
import { SafeAreaView, Text } from "react-native";

// Styles
import todoListScreenStyles from "./TodoListScreen.styles";

// Logic
import TodoListScreenLogic from "./TodoListScreen.logic";

// Components
import TodoListView from "@components/todo-list/TodoList.view";

const TodoListScreenView: React.FC = () => {
  const {} = TodoListScreenLogic();

  return (
    <SafeAreaView style={todoListScreenStyles.screen}>
      <TodoListView />
    </SafeAreaView>
  );
};

export default TodoListScreenView;
