import { combineReducers } from 'redux';
import settingsReducer from './settingsReducer';
import mapReducer from './mapReducer';
import infoReducer from './infoReducer';

const allReducers = combineReducers({
  settings: settingsReducer,
  map: mapReducer,
  info: infoReducer
});

export default allReducers;
