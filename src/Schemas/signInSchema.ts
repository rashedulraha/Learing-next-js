import { z } from "zod";

export const identifierVerification = z.string();
export const passwordVerification = z.string();

export const signinSchema = z.object({
  identifier: identifierVerification,
  password: passwordVerification,
});
