import {User} from '../../models';
import {IUser} from '../../types/models';
import {SignInUserAction, SignOutUserAction} from '../types/userReducerTypes';

const userSignIn = (): SignInUserAction => {
  const user: IUser = {
    name: 'Илья',
    lastName: 'Алпатов',
    adressPull: [],
    orderHistory: [],
    currentAdress: null,
    email: null,
  };
  return {
    type: '@user/signIn',
    payload: new User(user),
  };
};

const userSignOut = (): SignOutUserAction => {
  return {
    type: '@user/signOut',
  };
};

const userActions = {userSignIn, userSignOut};

export default userActions;
