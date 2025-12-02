import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";
import { User } from "@/public/utils/types";


const initialState: User = {
  id: 0,
  name: "",
  email: "",
  identifyCode: "",
  provider: "Email",
}

const simpleUserSlice = createSlice({
  name: "simpleUser",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.identifyCode = action.payload.identifyCode;
      state.provider = action.payload.provider;
    },
    initUser: (state) => {
      state = initialState;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
})



export const { setUser, initUser } = simpleUserSlice.actions;
export default simpleUserSlice.reducer;