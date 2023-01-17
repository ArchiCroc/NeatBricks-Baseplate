import { Meteor } from "meteor/meteor";
import { TimestampableBehavior } from "../../interfaces/behaviors";
import { z } from 'zod';
import SignUpSchema from "../schemas/SignUpSchema";
import SignInSchema from "../schemas/SignInSchema";
import ForgotPasswordSchema from "../schemas/ForgotPasswordSchema";

export type UserId = string;

export type User = Meteor.User & TimestampableBehavior;

export type ForgotPasswordInput = z.infer<typeof ForgotPasswordSchema>;

export type SignInInput = z.infer<typeof SignInSchema>;

export type SignUpInput = z.infer<typeof SignUpSchema>;