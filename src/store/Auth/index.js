import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  authToken: "",
  loggedIn: false,
  authCode: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    authenticationSuccessful(state, action) {
      state.authCode = action.payload.authToken;
      state.loggedIn = true;
    },
    authToken(state, action) {
      state.authToken(action.payload.authToken);
    },
  },
});

export const { authenticationSuccessful } = authSlice.actions;
export default authSlice.reducer;
