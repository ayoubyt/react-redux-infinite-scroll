import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/users";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    users: usersReducer
  },
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
