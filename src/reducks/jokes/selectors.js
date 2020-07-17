import { createSelector } from 'reselect';

const jokeSeector = (state) => state.jokes;

export const getJokes = createSelector(
  [jokeSeector],
  // state => [state]
  state => state.list
);