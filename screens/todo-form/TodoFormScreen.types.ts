import { RouteProp } from "@react-navigation/native";

import RootStackNavigatorParamList from "@navigation/root-stack-navigator/RootStackNavigator.params";
import RootStackNavigatorScreenNames from "@navigation/root-stack-navigator/RootStackNavigator.screen-names";

export type TodoFormScreenRouteProp = RouteProp<
  RootStackNavigatorParamList,
  RootStackNavigatorScreenNames.TODO_FORM
>;
