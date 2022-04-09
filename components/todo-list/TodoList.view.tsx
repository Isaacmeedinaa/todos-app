// React
import React from "react";
import { FlatList, View, Text } from "react-native";

// Safe Area View
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Logic
import TodoListLogic from "./TodoList.logic";

// Styles
import todoListStyles from "./TodoList.styles";

// Common Components
import PrimaryBtnView from "../common/primary-btn/PrimaryBtn.view";

const TodoListView: React.FC = () => {
  const { todos, renderTodo, onAddNewNoteBtn } = TodoListLogic();
  const { bottom } = useSafeAreaInsets();

  return (
    <View style={todoListStyles.container}>
      <FlatList
        ListHeaderComponent={
          <Text style={todoListStyles.header}>Todos - ({todos.length})</Text>
        }
        style={todoListStyles.flatList}
        data={todos}
        renderItem={renderTodo}
      />
      <View
        style={[
          todoListStyles.btnContainer,
          { marginBottom: bottom > 0 ? 0 : 25 },
        ]}>
        <PrimaryBtnView btnText="Add New Note" onBtnPress={onAddNewNoteBtn} />
      </View>
    </View>
  );
};

export default TodoListView;
