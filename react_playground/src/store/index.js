import { configureStore } from '@reduxjs/toolkit';

import websiteReducer from 'store/website';
import loadingReducer from 'store/loading';

const store = configureStore({
  reducer: {
    website: websiteReducer,
    loading: loadingReducer,
  },
});

export default store;
