// reducers.js
import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    isLoading: false,
  },
  reducers: {
    getUsersFetch: (state) => {
      state.isLoading = true;
    },
    getUsersSuccess: (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
    },
    getUsersFailure: (state) => {
      state.isLoading = false;
    },
    addUserFetch: (state, action) => {
      state.users.push(action.payload);

    },
    deleteUser: (state, action) => {
      const userIdToDelete = action.payload;
      state.users = state.users.filter(user => user.id !== userIdToDelete);
    },
  },
});

export const { getUsersFetch, getUsersSuccess, getUsersFailure, addUserFetch, deleteUser } = usersSlice.actions;

export default usersSlice.reducer;
