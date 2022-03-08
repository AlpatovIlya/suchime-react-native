import {User} from '../../models';
import {UserAction} from '../types/userReducerTypes';

type userReducerStateType = {
  user: User | null;
  loading: boolean;
  error: string | null;
};

const userReducerState: userReducerStateType = {
  user: null,
  loading: false,
  error: null,
};

function userReducer(
  state = userReducerState,
  action: UserAction,
): userReducerStateType {
  switch (action.type) {
    case '@user/signIn':
      return {...state, user: action.payload};
    case '@user/signOut':
      return {...state, user: null};

    default:
      return state;
  }
}

export default userReducer;
