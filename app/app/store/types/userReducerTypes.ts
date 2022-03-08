import {User} from '../../models';

export type SignInUserAction = {
  type: '@user/signIn';
  payload: User;
};

export type SignOutUserAction = {
  type: '@user/signOut';
};

export type UserAction = SignInUserAction | SignOutUserAction;
