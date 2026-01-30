import dbConnect from "@/lib/dbConnection";
import UserModel from "@/model/User";
import bcrypt from "bcrypt";
import { SendVerificationEmail } from "@/helpers/SendVerificationEmail";

export async function POST(request: Request) {
  await dbConnect();

  try {
    const { username, email, password } = await request.json();
    // existing  user verification  by user name
    const existingUserVerifiedByUserName = await UserModel.findOne({
      username,
      isVerified: true,
    });

    //

    if (existingUserVerifiedByUserName) {
      return Response.json(
        { success: false, message: "Username is  already taken" },
        { status: 400 },
      );
    }

    //  existing user by email
    const existingUserByEmail = await UserModel.findOne({ email });

    // generate verifyCode

    const verifyCode = Math.floor(10000 + Math.random() * 90000).toString();

    if (existingUserByEmail) {
      // true  TODO back here
    } else {
      const hashPassWord = bcrypt.hash(password, 10);
      const expiryDate = new Date();
      expiryDate.setHours(expiryDate.getHours() + 1);

      const newUser = new UserModel({
        username,
        email,
        password: hashPassWord,
        verifyCode,
        verifyExpiry: expiryDate,
        isVerified: false,
        isAcceptingMessage: true,
        messages: [],
      });

      await newUser.save();
    }

    //!   send  verification code
    const emailResponse = await SendVerificationEmail(
      email,
      username,
      verifyCode,
    );

    if (!emailResponse.success) {
      return Response.json({ message: "" }, { status: 500 });
    }
  } catch (signUpError) {
    console.log("Error registering user :", signUpError);
    return Response.json(
      {
        success: false,
        message: "Error registering user",
      },
      {
        status: 500,
      },
    );
  }
}
