// React
import React from "react";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import RootStackNavigator from "./root-stack-navigator/RootStackNavigator";

import { navigationRef } from "./RootNavigation";

const Navigator: React.FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStackNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
