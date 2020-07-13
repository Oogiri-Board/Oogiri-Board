import { createSelector } from 'reselect';

const themesSelector = (state) => state.themes;

export const getHandleName = createSelector(
  [themesSelector],
  state => state.themes.handleName
);

export const getTheme = createSelector(
  [themesSelector],
  state => state.themes.theme
);