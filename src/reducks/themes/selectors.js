import { createSelector } from 'reselect';

const themesSelector = (state) => state.themes;
// const jokeSeector = (state) => state.themes;

export const getThemes = createSelector(
  [themesSelector],
  state => state.list
);

// export const getThemeById = createSelector(
//   [jokeSeector],
//   state => state.list
// )