// React
import React from "react";
import { Text, TouchableOpacity } from "react-native";

// Props
import { ITodoCardProps } from "./TodoCard.interfaces";

// Logic
import TodoCardLogic from "./TodoCard.logic";

// Styles
import todoCardStyles from "./TodoCard.styles";

const TodoCardView: React.FC<ITodoCardProps> = ({ todo }) => {
  const { onTodoCardPress } = TodoCardLogic(todo._id);

  return (
    <TouchableOpacity
      style={todoCardStyles.card}
      activeOpacity={0.8}
      onPress={onTodoCardPress}>
      <Text style={todoCardStyles.todoTitle}>{todo.title}</Text>
      <Text style={todoCardStyles.todoDescription}>{todo.description}</Text>
    </TouchableOpacity>
  );
};

export default TodoCardView;
