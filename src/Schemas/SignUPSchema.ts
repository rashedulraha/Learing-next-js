import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(6, "username  must be 6  character")
  .max(16, "username must be no more then 15 character")
  .regex(/^[a-zA-Z0-9_]{6,16}$/, "username must not contain spacial character");

export const emailValidation = z
  .string()
  .email({ message: "Invalid email address" });

export const passwordValidation = z
  .string()
  .min(6, { message: "password must be at last 6 character" });

export const signUpSchema = z.object({
  username: usernameValidation,
  email: emailValidation,
  password: passwordValidation,
});
