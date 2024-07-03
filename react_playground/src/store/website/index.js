import { createSlice } from "@reduxjs/toolkit";

import { getWebsiteInfo } from "store/website/thunk";

const initialState = {
  website: {},
};

const websiteSlice = createSlice({
  name: "website",
  initialState,
  reducers: {
    setWebsite: (state, action) => {
      state.website = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getWebsiteInfo.fulfilled, (state, action) => {
      state.website = action.payload;
    });
  },
});

export const { setWebsite } = websiteSlice.actions;
export default websiteSlice.reducer;
