import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux';

// 各Reducerをimport 
import { ThemesReducer } from '../themes/reducers';
import { JokeReducer } from '../jokes/reducers';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

export default function createStore(history) {

  const logger = createLogger({
    collapsed: true,
    diff: true
  });

  return reduxCreateStore(
    combineReducers({
      themes: ThemesReducer,
      jokes: JokeReducer,
      router: connectRouter(history)
    }),
    applyMiddleware(
      logger,
      routerMiddleware(history),
      thunk
    )
  )
}