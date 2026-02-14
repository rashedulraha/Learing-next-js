import { ApiResponse } from "@/Types/ApiResponse";
import VerificationEmail from "../../EmailVerification/VerificationEmail";
import { resend } from "../lib/resend";

export async function SendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string,
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: email,
      subject: "Verification code | Rashedul Islam",
      react: VerificationEmail({ username, otp: verifyCode }),
    });

    // if (error) {
    //   return Response.json({ error }, { status: 500 });
    // }

    // return Response.json(data);
    return { success: true, message: "Verification email send successfully" };
  } catch (emailError) {
    console.error("Error sending verification email :", emailError);
    return { success: false, message: "Failed to send  verification email" };
  }
}
