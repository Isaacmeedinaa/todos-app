// React
import React from "react";

// React Navigation Stack
import { createStackNavigator } from "@react-navigation/stack";

// Params
import RootStackNavigatorParamList from "./RootStackNavigator.params";

// Screen Names
import RootStackNavigatorScreenNames from "./RootStackNavigator.screen-names";

// Styles
import rootStackNavigatorStyles from "./RootStackNavigator.styles";

// Components
import HeaderLeftView from "./header-left/HeaderLeft.view";

// Screens
import TodoListScreenView from "@screens/todo-list/TodoListScreen.view";
import TodoFormScreenView from "@screens/todo-form/TodoFormScreen.view";
import TodoScreenView from "@screens/todo/TodoScreen.view";

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
      <RootStack.Screen
        name={RootStackNavigatorScreenNames.TODO_FORM}
        component={TodoFormScreenView}
        options={{
          presentation: "modal",
          headerStyle: rootStackNavigatorStyles.headerStyle,
          headerTitleStyle: rootStackNavigatorStyles.headerTitle,
          title: "Todo Form",
          headerTitleAlign: "left",
          headerLeft: ({ onPress }) => <HeaderLeftView onPress={onPress} />,
        }}
      />
      <RootStack.Screen
        name={RootStackNavigatorScreenNames.TODO}
        component={TodoScreenView}
        options={{
          headerStyle: rootStackNavigatorStyles.headerStyle,
          headerTitleStyle: rootStackNavigatorStyles.headerTitle,
          title: "Todo",
          headerTitleAlign: "left",
          headerLeft: ({ onPress }) => <HeaderLeftView onPress={onPress} />,
        }}
      />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
