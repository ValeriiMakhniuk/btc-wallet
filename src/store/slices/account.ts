import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TAccountState = {
  address: string;
};

const initialState: TAccountState = {
  address: "",
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setAddress(state, action: PayloadAction<string>) {
      state.address = action.payload;
    },
  },
});
