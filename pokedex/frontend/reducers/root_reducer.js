import { combineReducers } from 'redux';
import entitesReducer from './entities_reducer';

const rootReducer = combineReducers({
  entities: entitesReducer
});

export default rootReducer;