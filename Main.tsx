// React
import React from "react";
import App from "./App";

// React Redux
import { Provider } from "react-redux";
import store from "@store/store";

const Main: React.FC = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Main;
