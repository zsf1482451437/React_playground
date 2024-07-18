import { createSelector } from '@reduxjs/toolkit';

const loadingState = (state) => state.loading;
export const loadingSelector = createSelector(
  loadingState,
  (state) => state.isLoading
);
