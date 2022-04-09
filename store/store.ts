// Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";

// Reducers
import todosReducer from "./slices/todos.slice";

// Middleware
const createDebugger = require("redux-flipper").default;
import createSagaMiddleware from "redux-saga";

// Root Saga
import rootSaga from "./sagas/rootSaga";

// Creates saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false })
      .concat(sagaMiddleware)
      .concat(createDebugger()),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
