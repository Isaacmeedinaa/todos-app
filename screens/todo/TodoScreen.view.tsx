// React
import React from "react";
import { SafeAreaView, View, Text } from "react-native";

// Props
import { ITodoScreenProps } from "./TodoScreen.interfaces";

// Styles
import todoScreenStyles from "./TodoScreen.styles";

// Logic
import TodoScreenLogic from "./TodoScreen.logic";

// Components
import TodoCardView from "@components/todo/todo-card/TodoCard.view";
import PrimaryBtnView from "@components/common/primary-btn/PrimaryBtn.view";

const TodoScreenView: React.FC<ITodoScreenProps> = ({ route }) => {
  const { onEditPress, onDeletePress } = TodoScreenLogic(route.params.todoId);

  return (
    <SafeAreaView style={todoScreenStyles.screen}>
      <View style={todoScreenStyles.container}>
        <TodoCardView todoId={route.params.todoId} />
        <PrimaryBtnView
          customBtnStyles={todoScreenStyles.editBtn}
          btnText="Edit"
          onBtnPress={onEditPress}
        />
        <Text onPress={onDeletePress} style={todoScreenStyles.deleteText}>
          Delete
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default TodoScreenView;
