// React
import React from "react";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import RootStackNavigator from "./root-stack-navigator/RootStackNavigator";

const Navigator: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
