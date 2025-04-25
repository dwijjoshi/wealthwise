import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userSlice",
  initialState: {},
  reducers: {
    saveUser: async (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { saveUser } = userSlice.actions;

export default userSlice.reducer;
