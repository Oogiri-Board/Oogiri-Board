import * as Actions from './actions';
import initialState from '../store/initialState';

export const ThemesReducer = (state = initialState.themes, action: any) => {
  switch (action.type) {
    case Actions.FETCH_THEMES:
      return {
        ...state,
        list: [...action.payload]
      };

      default:
      return state;
  }
};