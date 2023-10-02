// import User from "../model/user";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import { signinSchema, userSchema } from "../schemas/user";
// import Role from "../model/role";

// export const signup = async (req, res) => {
//   try {
//     const { name, email, password, role_id, tel, address } = req.body;
//     const { error } = userSchema.validate(req.body, { abortEarly: false });

//     if (error) {
//       const errors = error.details.map((err) => err.message);
//       return res.status(404).json({
//         message: errors,
//       });
//     }

//     // const existingRole = await Role.findOne({ _id: role_id });
//     // if (!existingRole) {
//     //     return res.status(400).json({
//     //         message: "Danh mục không tồn tại"
//     //     });
//     // }

//     const userExist = await User.findOne({ email });
//     if (userExist) {
//       return res.status(200).json({
//         message: "Email đã tồn tại",
//       });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const memberRole = await Role.findOne({ name: "member" });
    
//     const numberUser = User.length + 1;
//     const cartId = await Cart.create(numberUser);
//     const cartIdFind = Cart.findOne({ name: "numberUser"});
//     console.log(cartIdFind._id);
//     console.log(numberUser)

//     const user = await User.create({
//       name,
//       email,
//       password: hashedPassword,
//       role_id: memberRole.id,
//       tel,
//       cart_id: cartIdFind._id,
//       address,
//     });

//     // console.log(numberUser);
//     // console.log(cartId);

//     //tạo token từ server
//     const token = jwt.sign({ _id: user._id }, "123456", { expiresIn: 60 * 60 });

//     return res.status(201).json({
//       message: "Đăng ký thành công",
//       accessToKen: token,
//       user,
//     });
//   } catch (error) {
//     return res.status(404).json({
//       message: error.message,
//     });
//   }
// };

// export const signin = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const { error } = signinSchema.validate(req.body, { abortEarly: false });

//     if (error) {
//       const errors = error.details.map((err) => err.message);
//       return res.status(404).json({
//         message: errors,
//       });
//     }

//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(404).json({
//         message: "Tài khoản không tồn tại ",
//       });
//     }
//     const isMath = await bcrypt.compare(password, user.password);
//     if (!isMath) {
//       return res.status(404).json({
//         message: "sai mật khẩu",
//       });
//     }

//     // const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY, { expiresIn: 60 * 60 })
//     const token = jwt.sign({ _id: user._id }, "123456", { expiresIn: 60 * 60 });

//     return res.status(200).json({
//       message: "Đăng nhập thành công ",
//       accessToKen: token,
//       user,
//     });
//   } catch (error) {
//     return res.status(404).json({
//       message: error.message,
//     });
//   }
// };
