import { z } from "zod";

export const SignInSchema = z.object({
  selector: z.string().max(255),
  password: z.string().max(255),
});

export default SignInSchema;