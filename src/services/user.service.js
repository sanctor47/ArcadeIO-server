import User from '../models/user.model';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

//get all users
export const getAllUsers = async () => {
  const data = await User.find().populate('gamesPlayed');
  return data;
};

//create new user
export const newUser = async (body) => {
  const data = await User.create(body);
  return data;
};

//update single user
export const updateUser = async (_id, body) => {
  const data = await User.findByIdAndUpdate(
    {
      _id
    },
    body,
    {
      new: true
    }
  );
  return data;
};

//delete single user
export const deleteUser = async (id) => {
  await User.findByIdAndDelete(id);
  return '';
};

//get single user
export const getUser = async (id) => {
  const data = await User.findById(id).populate("gamesPlayed");
  return data;
};

export const register = async (body) => {
  try {
    if (!body.firstName || !body.lastName || !body.email || !body.password || !body.phone) {
      throw {
        message: "Please enter all required fields."
      }
    }
    const DuplicateUserEmail = await User.findOne({ email: body.email })
    if (DuplicateUserEmail !== null) { throw { message: "Email already in use." } }
    const DuplicateUserPhone = await User.findOne({ phone: body.phone })
    if (DuplicateUserPhone !== null) { throw { message: "Phone already in use." } }
    const encryptedPassword = await bcrypt.hash(body.password, 10);
    const NewUserData = {
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      phone: body.phone,
      password: encryptedPassword,
    }
    const NewUser = await User.create(NewUserData);
    const token = jwt.sign(
      { user_id: NewUser._id, email: NewUser.email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );
    const response = {
      User: NewUser,
      token: token,
    }
    return response
  } catch (err) {
    console.log(err)
    throw (err)
  }
}

export const login = async (body) => {
  try {
    if (!body.email || !body.password) {
      throw {
        message: "Please enter all required fields."
      }
    }
    const TargetUser = await User.findOne({ email: body.email })
    // console.log(TargetUser)
    if (TargetUser) {
      console.log(TargetUser.password);
      console.log(body.password);
      const res = await bcrypt.compare(body.password, TargetUser.password)
      if (res) {
        const token = jwt.sign(
          { user_id: TargetUser._id, email: TargetUser.email },
          process.env.TOKEN_KEY,
          {
            expiresIn: "2h",
          }
        )
        const response = {
          User: TargetUser,
          token: token,
        }
        return response
      } else {
        throw { message: "Invalid Credintials" }
      }
    } else {
      throw {
        message: "User not found"
      }
    }
  } catch (err) {
    console.log(err)
  }
}
