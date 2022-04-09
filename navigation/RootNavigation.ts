import { createNavigationContainerRef } from "@react-navigation/native";
import RootStackNavigatorScreenNames from "./root-stack-navigator/RootStackNavigator.screen-names";
import RootStackNavigatorParamList from "./root-stack-navigator/RootStackNavigator.params";

export const navigationRef =
  createNavigationContainerRef<RootStackNavigatorParamList>();

export function navigate(name: RootStackNavigatorScreenNames, params: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
