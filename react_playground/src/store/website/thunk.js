import { createAsyncThunk } from '@reduxjs/toolkit';

import { getWebsiteAPI } from 'request/website';

const getWebsiteInfo = createAsyncThunk('website/getWebsiteInfo', async () => {
  const res = await getWebsiteAPI();
  return res;
});

export default getWebsiteInfo;
