import { createSelector } from 'reselect';

const jokesSelector = (state) => state.jokes;

export const getHandleName = createSelector(
  [jokesSelector],
  state => state.jokes.handleName
);