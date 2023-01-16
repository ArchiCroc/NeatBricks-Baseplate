import { z } from "zod";
//import { ForgotPasswordInput } from "../types";

export const ForgotPasswordSchema = z.object({
  email: z.string().max(255).email(),
});

export default ForgotPasswordSchema;