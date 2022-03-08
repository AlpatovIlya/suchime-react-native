interface IUser {
  name: string | null;
  lastName: string | null;
  email: string | null;
  adressPull: string[];
  currentAdress: string | null;
  orderHistory: string[];
}

export default IUser;
