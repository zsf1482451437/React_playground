import { createAsyncThunk } from "@reduxjs/toolkit";
import { getWebsiteAPI } from "@request/website";

export const getWebsiteInfo = createAsyncThunk(
  "website/getWebsite",
  async () => {
    const res = await getWebsiteAPI();
    return res;
  }
);
