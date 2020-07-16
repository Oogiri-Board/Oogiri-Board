import * as Actions from './actions';
import initialState from '../store/initialState';

const jokeState = initialState.themes.jokes;
export const JokeReducer = (state = initialState.jokes, action) => {
  switch (action.type) {
    case Actions.FETCH_JOKES:
      return {
        ...state,
        list: [...action.payload]
      }

      default:
      return state;
  }
};