import { z } from "zod";

export const codeVerification = z
  .string()
  .length(6, "verification code must be 6 character");

export const verificationSchema = z.object({
  code: codeVerification,
});
