import dbConnect from "@/lib/dbConnection";
import UserModel from "@/model/User";
import bcrypt from 'bcrypt';

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
        { success: false, message: "User already taken" },
        { status: 400 },
      );
    }

    //  existing user by email

    const existingUserByEmail = await UserModel.findOne({ email });
    if (existingUserByEmail) {
      // true  TODO back here
    } else {
      const  hashPassWord = 
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
