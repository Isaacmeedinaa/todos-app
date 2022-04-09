// React
import React from "react";
import { FlatList, View, Text } from "react-native";
import NewTodoBtnView from "./new-todo-btn/NewTodoBtn.view";

// Logic
import TodoListLogic from "./TodoList.logic";

// Styles
import todoListStyles from "./TodoList.styles";

const TodoListView: React.FC = () => {
  const { todos, renderTodo } = TodoListLogic();

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
      <NewTodoBtnView />
    </View>
  );
};

export default TodoListView;
