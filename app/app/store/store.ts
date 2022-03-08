import {combineReducers} from 'redux';
import {userReducer} from './reducers';
import applicationReducer from './reducers/applicationReducer';

const reducers = combineReducers({
  user: userReducer,
  application: applicationReducer,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
