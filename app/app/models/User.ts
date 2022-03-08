import {IUser} from '../types/models';

class User implements IUser {
  name;
  lastName;
  email;
  adressPull;
  currentAdress;
  orderHistory = [];

  constructor(user: IUser) {
    this.name = user.name;
    this.lastName = user.lastName;
    this.email = user.email;
    this.adressPull = user.adressPull;
    this.currentAdress = user.currentAdress;
  }
}

export default User;
