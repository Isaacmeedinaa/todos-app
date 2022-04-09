// React
import React from "react";
import { SafeAreaView } from "react-native";

// Props
import { ITodoFormScreenProps } from "./TodoFormScreen.interfaces";

// Styles
import todoFormScreenStyles from "./TodoFormScreen.styles";

// Components
import TodoFormView from "@components/todo-form/TodoForm.view";

const TodoFormScreenView: React.FC<ITodoFormScreenProps> = ({ route }) => {
  return (
    <SafeAreaView style={todoFormScreenStyles.container}>
      <TodoFormView todoId={route.params?.todoId} />
    </SafeAreaView>
  );
};

export default TodoFormScreenView;
