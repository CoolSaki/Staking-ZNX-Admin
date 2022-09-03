import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginUser, logoutUser, registerUser } from "./actions";

const PREFIX = "auth";

let initToken;
if (localStorage.jwtToken) {
  initToken = true;
} else {
  initToken = false;
}

const initialState: any = {
  loginStatus: initToken,
  err: "",
};

const handleLogin = (state: any, payload: any) => {
  if (payload.Success) {
    state.loginStatus = true;
  } else {
    state.err = payload.Error.Msg;
  }
};

const logout = (state: any) => {
  state.loginStatus = false;
};

export const authReducer = createSlice({
  name: PREFIX,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      loginUser.fulfilled.type,
      (state: any, action: PayloadAction<any>) => {
        handleLogin(state, action.payload);
      }
    );
    builder.addCase(logoutUser.fulfilled.type, (state: any) => {
      logout(state);
    });
  },
});

export { loginUser, logoutUser, registerUser };
export default authReducer.reducer;
