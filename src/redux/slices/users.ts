import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { User } from "../../api/users";

interface UsersState {
  isLoading: boolean;
  isError: boolean;
  data: Array<User>;
  pagesLoaded: number;
  selectedProfile: string | null;
}

export interface RequestUsersPayload {
  limit: number;
}

export interface DeleteUserPayload {
  id: string;
}

export interface addUsersPayload {
  users: Array<User>;
  // page: number;
}

export interface ShowProfilePayload {
  id: string;
}

const initialState: UsersState = {
  isLoading: false,
  isError: false,
  data: [],
  pagesLoaded: 0,
  selectedProfile: null
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    requestUsers(state, action: PayloadAction<RequestUsersPayload>) {
      return { ...state, isLoading: true };
    },
    addUsers(state, action: PayloadAction<addUsersPayload>) {
      return {
        ...state,
        data: [...state.data, ...action.payload.users],
        pagesLoaded: state.pagesLoaded + (action.payload.users.length ? 1 : 0),
        isLoading: false
      };
    },
    setError(state) {
      return { ...state, isError: true, isLoading: false };
    },
    deleteUser(state, action: PayloadAction<DeleteUserPayload>) {
      return {
        ...state,
        data: state.data.filter((e) => e.id !== action.payload.id)
      };
    },
    showProfile(state, action: PayloadAction<ShowProfilePayload>) {
      return { ...state, selectedProfile: action.payload.id };
    },
    hideProfile(state) {
      return { ...state, selectedProfile: null };
    }
  }
});

export const {
  requestUsers,
  addUsers,
  setError,
  deleteUser,
  showProfile,
  hideProfile
} = usersSlice.actions;

export const usersReducer = usersSlice.reducer;
