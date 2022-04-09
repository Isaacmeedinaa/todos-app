// React
import React from "react";

// React Navigation Stack
import { createStackNavigator } from "@react-navigation/stack";

// Params
import RootStackNavigatorParamList from "./RootStackNavigator.params";

// Screen Names
import RootStackNavigatorScreenNames from "./RootStackNavigator.screen-names";

// Screens
import TodoListScreenView from "@screens/todo-list/TodoListScreen.view";

const RootStack = createStackNavigator<RootStackNavigatorParamList>();

const RootStackNavigator: React.FC = () => {
  return (
    <RootStack.Navigator
      initialRouteName={RootStackNavigatorScreenNames.TODO_LIST}>
      <RootStack.Screen
        name={RootStackNavigatorScreenNames.TODO_LIST}
        component={TodoListScreenView}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
