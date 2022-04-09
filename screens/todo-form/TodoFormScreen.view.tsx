// React
import React from "react";
import { SafeAreaView } from "react-native";

// Props
import { ITodoFormScreenProps } from "./TodoFormScreen.interfaces";

// Styles
import todoFormScreenStyles from "./TodoFormScreen.styles";

const TodoFormScreenView: React.FC<ITodoFormScreenProps> = ({ route }) => {
  return <SafeAreaView style={todoFormScreenStyles.container}></SafeAreaView>;
};

export default TodoFormScreenView;
