// React
import React from "react";
import { Text, View } from "react-native";

// Props
import { ITodoCardProps } from "./TodoCard.interfaces";

// Logic
import TodoCardLogic from "./TodoCard.logic";

// Styles
import todoCardStyles from "./TodoCard.styles";

const TodoCardView: React.FC<ITodoCardProps> = ({ todoId }) => {
  const { todo } = TodoCardLogic(todoId);

  if (!todo) return null;

  return (
    <View style={todoCardStyles.card}>
      <Text style={todoCardStyles.todoTitle}>{todo.title}</Text>
      <Text style={todoCardStyles.todoDescription}>{todo.description}</Text>
    </View>
  );
};

export default TodoCardView;
