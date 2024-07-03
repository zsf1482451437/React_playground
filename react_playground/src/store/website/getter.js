import { createSelector } from "@reduxjs/toolkit";

const websiteState = (state) => state.website;
export const websiteSelector = createSelector(
  websiteState,
  (state) => state.website
);
