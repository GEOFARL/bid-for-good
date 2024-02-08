export interface IUser {
  email: string;
  name: string;
}

export interface IUserSignIn extends Omit<IUser, "name"> {
  password: string;
}