import { voucherSchema } from '../schemas/voucher';
import Voucher from '../model/voucher'

// Lấy danh sách tất cả các voucher
export const getAllVouchers = async (req, res) => {
    try {
        const vouchers = await Voucher.find();
        if (!vouchers || vouchers.length === 0) {
            return res.status(404).json({
                message: "Voucher not found"
            });
        }
        return res.json(vouchers);
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
}
// Tạo một voucher mới
export const createVoucher = async (req, res) => {
    try {
        const { error } = voucherSchema.validate(req.body, { abortEarly: false });
        if (error) {
            return res.status(400).json({
                message: error.details.map((err) => err.message)
            });
        }
        const { code, value, quantity, status } = req.body;
        const voucher = new Voucher({ code, value, quantity, status });
        await voucher.save();
        res.status(201).json(voucher);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Lấy thông tin một voucher bằng ID
export const getVoucherById = async (req, res) => {
    try {
        const voucher = await Voucher.findById(req.params.id);
        if (!voucher) {
            return res.status(404).json({ error: 'Voucher not found' });
        }
        res.status(200).json(voucher);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Cập nhật thông tin một voucher bằng ID
export const updateVoucherById = async (req, res) => {
    try {
        const voucher = await Voucher.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!voucher) {
            return res.status(404).json({ error: 'Voucher not found' });
        }
        res.status(200).json(voucher);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
// Xóa voucher
export const removeVoucher = async (req, res) => {
    try {
        const voucher = await Voucher.findByIdAndDelete(req.params.id);
        if (!voucher) {
            return res.status(404).json({
                message: "Voucher not found"
            });
        }
        return res.json({
            message: "Voucher deleted successfully",
            product,
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
}