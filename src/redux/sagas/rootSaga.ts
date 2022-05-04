import { all, fork } from "redux-saga/effects";
import { usersWatcher } from "./watchers/users";

export function* rootSaga() {
  yield all([fork(usersWatcher)]);
}
