
import { quantitySchema } from '../schemas/quantity';
import Product from '../model/product'
import Brand from '../model/brand'
import Quantity from '../model/quantity';

export const getAllQuantity = async (req, res) => {
    try {
        const quantity = await Quantity.find();
        if (!quantity || quantity.length === 0) {
            return res.status(404).json({
                message: "Không có sản phẩm nào trong cơ sở dữ liệu"
            });
        }
        return res.json(quantity);
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
}

export const getAllQuantityByProduct = async (req, res) => {
    try {
        const { product_id } = req.params;
        const quantity = await Quantity.find({ product_id });
        if (!quantity || quantity.length === 0) {
            return res.status(404).json({
                message: "Không có sản phẩm nào trong cơ sở dữ liệu"
            });
        }
        return res.json(quantity);
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
}

export const getquantityByIdProduct = async (req, res) => {
    try {
        const { product_id, size } = req.params;
        const quantity = await Quantity.findOne({ product_id, size });
        if (!quantity) {
            return res.status(404).json({
                message: "Không tìm thấy sản phẩm"
            });
        }
        return res.json({ count: quantity.count });
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
}

export const createQuantity = async (req, res) => {
    try {
        const { size, count, product_id } = req.body;
        const existingQuantity = await Quantity.findOne({ product_id, size, count });
        if (existingQuantity) {
            return res.status(400).json({
                message: "Thông tin đã tồn tại"
            });
        }
        const quantity = await Quantity.create({ product_id, size, count });
        return res.status(201).json(quantity);
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
}

export const updateQuantity = async (req, res) => {
    try {
        const { product_id, size } = req.params;

        const { count } = req.body;

        const existingQuantity = await Quantity.findOne({ product_id, size });
        if (!existingQuantity) {
            return res.status(404).json({
                message: "Không tìm thấy sản phẩm"
            });
        }
        existingQuantity.count = count;
        await existingQuantity.save();
        return res.json({
            message: "Cập nhật thông tin sản phẩm thành công",
            updatedQuantity: existingQuantity
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
}

export const removeQuantityProduct = async (req, res) => {
    try {
        const { product_id, size } = req.params;
        const quantity = await Quantity.findOneAndDelete({ product_id, size });
        if (!quantity) {
            return res.status(404).json({
                message: "Không tìm thấy sản phẩm để xóa"
            });
        }
        return res.json({
            message: "Xóa sản phẩm thành công",
            quantity,
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
}

