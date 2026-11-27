import asyncHandler from "../utils/asyncHandler.js";
//method for registerUser
const registerUser = asyncHandler(async (req, res) => {
  //check user data 
  //check if user already exist 
  //upload image 
  //create user in database
  console.log("register hit");
  return res.status(200).json({
    message: "ok",
  });
});

export {registerUser};