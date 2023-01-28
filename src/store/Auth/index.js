import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  authToken: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {},
});

export default authSlice.reducer;
