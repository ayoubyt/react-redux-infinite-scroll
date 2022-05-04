import { call, put, select, takeLatest } from "redux-saga/effects";
import {
  requestUsers,
  addUsers,
  setError,
  deleteUser,
  DeleteUserPayload,
  RequestUsersPayload
} from "../../slices/users";
import { getUsers, deleteUser as deleteUSerRequest } from "../../../api/users";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../stroreConfig";

function* getUsersHandler(action: PayloadAction<RequestUsersPayload>) {
  try {
    const page: number = yield select(
      (state: RootState) => state.users.pagesLoaded
    );
    const { data: users } = yield call(getUsers, page, action.payload.limit);
    yield put(addUsers({ users }));
  } catch (error) {
    yield put(setError());
  }
}

function* deleteUserHandler(action: PayloadAction<DeleteUserPayload>) {
  try {
    yield call(deleteUSerRequest, action.payload.id);
  } catch (error) {
    yield put(setError());
  }
}

export function* usersWatcher() {
  yield takeLatest(requestUsers.type, getUsersHandler);
  yield takeLatest(deleteUser.type, deleteUserHandler);
}
