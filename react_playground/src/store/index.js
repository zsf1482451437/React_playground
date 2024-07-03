import { configureStore } from '@reduxjs/toolkit';

import websiteReducer from 'store/website';

export const store = configureStore({
  reducer: {
    website: websiteReducer,
  },
});
