import { createSelector } from 'reselect';

const jokeSeector = (state: any) => state.jokes;

export const getJokes = createSelector(
  [jokeSeector],
  // state => [state]
  state => state.list
);