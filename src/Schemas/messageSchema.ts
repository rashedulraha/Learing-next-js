import { z } from "zod";
export const messageValidation = z
  .string()
  .min(10, "contain must be 10 character")
  .max(300, { message: "Content must be no longer then 300 character" });

export const signinSchema = z.object({
  content: messageValidation,
});
