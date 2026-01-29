import { z } from "zod";

export const acceptingVerification = z.boolean();

export const signinSchema = z.object({
  IsAccepting: acceptingVerification,
});
