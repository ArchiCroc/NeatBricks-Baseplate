import { Meteor } from "meteor/meteor";

export interface User extends Meteor.User {

}

export interface ForgotPasswordInput {
  email: string;
}

export interface SignInInput {
  selector: string;
  password: string;
}

export interface SignUpInput {
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
