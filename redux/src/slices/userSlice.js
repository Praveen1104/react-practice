import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
  users: [
    {
      name: "praveens",
    },
  ],
};

const userInfoLsice = createSlice({
  name: "users",
  initialState: initialstate,
  reducers: {
    setUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user, index) => {
        index !== action.payload;
      });
    },
  },
});

export const { setUser, deleteUser } = userInfoLsice.actions;

export default userInfoLsice.reducer;
