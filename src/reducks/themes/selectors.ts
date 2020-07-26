import { createSelector } from 'reselect';

const themesSelector = (state: any) => state.themes;

export const getThemes = createSelector(
  [themesSelector],
  state => state.list
);
