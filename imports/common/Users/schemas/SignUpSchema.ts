import { z } from "zod";

export const SignUpSchema = z.object({
  username: z.string().max(255),
  password: z.string().max(255),
  confirmPassword: z.string().max(255),
  firstName: z.string().max(128),
  lastName: z.string().max(128),
});

export default SignUpSchema;