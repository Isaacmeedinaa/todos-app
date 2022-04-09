import RootStackNavigatorScreenNames from "./RootStackNavigator.screen-names";

type RootStackNavigatorParamList = {
  [RootStackNavigatorScreenNames.TODO_LIST]: undefined;
  [RootStackNavigatorScreenNames.TODO]: { todoId: string };
  [RootStackNavigatorScreenNames.TODO_FORM]: { todoId: string } | undefined;
};

export default RootStackNavigatorParamList;
