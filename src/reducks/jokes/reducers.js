import * as Actions from './actions';
import initialState from '../store/initialState';

export const JokeReducer = (state = initialState.jokes, action) => {
  switch (action.type) {
    case Actions.FETCH_JOKES:
      // return {
      //   ...state,
      //   ...action.payload
      // }
      return {
        ...state,
        list: [...action.payload]
      }

      default:
      return state;
  }
};