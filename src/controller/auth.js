import User from "../model/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { signinSchema, userSchema } from "../schemas/user";
import Role from "../model/role";

export const signUp = async (req, res) => {
    try {
        const { error } = userSchema.validate(req.body, { abortEarly: false })
        if (error) {
            const errors = error.details.map((err) => err.message);
            return res.status(404).json({
                message: errors
            })
        }
        const { userName, fullName, gender, email, password } = req.body
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(404).json({
                message: "Email đã tồn tại"
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const memberRole = await Role.findOne({ name: "Member" });
        const user = await User.create({
            userName,
            fullName,
            gender,
            email,
            password: hashedPassword,
            role_id: memberRole.id,
        })
        //tạo token từ server 
        const token = jwt.sign({ _id: user._id }, '123456', { expiresIn: 60 * 60 })
        return res.status(201).json({
            message: "Đăng ký thành công",
            accessToKen: token,
            user,
        });

    } catch (error) {
        return res.status(404).json({
            message: error.message,
        })
    }
}

export const signIn = async (req, res) => {
    try {
        const { error } = signinSchema.validate(req.body, { abortEarly: false })
        const { email, password } = req.body;
        if (error) {
            const errors = error.details.map((err) => err.message);
            return res.status(404).json({
                message: errors
            })
        }
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({
                message: "Tài khoản không tồn tại "
            })
        }
        const isMath = await bcrypt.compare(password, user.password)
        if (!isMath) {
            return res.status(404).json({
                message: "sai mật khẩu"
            })
        }
        // const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY, { expiresIn: 60 * 60 })
        const token = jwt.sign({ _id: user._id }, '123456', { expiresIn: 60 * 60 })

        return res.status(200).json({
            message: "Đăng nhập thành công ",
            accessToKen: token,
            user,
        })

    } catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}