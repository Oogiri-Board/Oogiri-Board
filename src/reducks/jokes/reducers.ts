import * as Actions from './actions';
import initialState from '../store/initialState';

export const JokeReducer = (state = initialState.jokes, action: any) => {
  switch (action.type) {
    case Actions.FETCH_JOKES:
      return {
        ...state,
        list: [...action.payload]
      }

      case Actions.INCREMENT_LIKES:
        return {
          ...state,
          ...action.payload
        }

      default:
      return state;
  }
};