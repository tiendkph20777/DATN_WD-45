import { userSchema } from "../schemas/user";
import User from "../model/user";


export const getAllUsers = async (req, res) => {
    try {
        const user = await User.find();
        if (!user || user.length === 0) {
            return res.status(404).json({
                message: "Không có tài khoản nào trong cơ sở dữ liệu"
            });
        }
        return res.json(user);
    } catch (error) {
        return res.status(404).json({
            message: error.message,
        })
    }
}

export const getOneUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({
                message: "Không tìm thấy tài khoản nào"
            });
        }
        return res.json(user);
    } catch (error) {
        return res.status(404).json({
            message: error.message,
        })
    }
}

// export const createUser = async (req, res) => {
//     try {

//     } catch (error) {
//         return res.status(404).json({
//             message: error.message,
//         })
//     }
// }

export const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const { name } = req.body;
        const existingUser = await User.findOne({
            name,
            _id: { $ne: id }
        });
        if (existingUser) {
            return res.status(400).json({
                message: "User đã tồn tại"
            });
        }
        const user = await User.findByIdAndUpdate(
            id,
            req.body,
            {
                new: true,
            }
        );
        if (!user) {
            return res.json({
                message: "Cập nhật User không thành công"
            });
        }
        return res.json({
            message: "Cập nhật User thành công",
            user,
        });
    } catch (error) {
        return res.status(404).json({
            message: error.message,
        })
    }
}

export const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({
                message: "Không tìm thấy user để xóa"
            });
        }
        return res.json({
            message: "Xóa user thành công",
            user,
        });
    } catch (error) {
        return res.status(404).json({
            message: error.message,
        })
    }
}