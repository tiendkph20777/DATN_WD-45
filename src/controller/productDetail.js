
import { productDetailSchema } from '../schemas/productDetail';
import Product from '../model/product'
import Brand from '../model/brand'
import ProductDetail from '../model/productDetail';
import product from '../model/product';

export const getAllProductDetail = async (req, res) => {
    try {
        const productdetail = await ProductDetail.find();
        if (!productdetail || productdetail.length === 0) {
            return res.status(404).json({
                message: "Không có sản phẩm nào trong cơ sở dữ liệu"
            });
        }
        return res.json(productdetail);
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
}

export const getAllProductDetailAllProduct = async (req, res) => {
    try {
        const { product_id } = req.params;
        const productDetail = await ProductDetail.find({ product_id });
        if (!productDetail || productDetail.length === 0) {
            return res.status(404).json({
                message: "Không có sản phẩm nào trong cơ sở dữ liệu"
            });
        }
        return res.json(productDetail);
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
}

export const getProductDetailByIdProduct = async (req, res) => {
    try {
        const { product_id, size } = req.params;
        const productDetail = await ProductDetail.findOne({ product_id, size });
        if (!productDetail) {
            return res.status(404).json({
                message: "Không tìm thấy sản phẩm"
            });
        }
        return res.json({ quantity: productDetail.quantity });
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
}

export const createProductDetail = async (req, res) => {
    try {
        const { error } = productDetailSchema.validate(req.body, { abortEarly: false });
        if (error) {
            return res.status(400).json({
                message: error.details.map((err) => err.message)
            });
        }
        const { size, quantity, product_id } = req.body;
        const existingProductDetail = await ProductDetail.findOne({ product_id, size, quantity });
        if (existingProductDetail) {
            return res.status(400).json({
                message: "Thông tin đã tồn tại"
            });
        }
        const productDetail = await ProductDetail.create({ product_id, size, quantity });
        return res.status(201).json(productDetail);
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
}

export const updateProductDetail = async (req, res) => {
    try {
        const { product_id, size } = req.params;
        const { quantity } = req.body;
        const existingProductDetail = await ProductDetail.findOne({ product_id, size });
        if (!existingProductDetail) {
            return res.status(404).json({
                message: "Không tìm thấy sản phẩm"
            });
        }
        existingProductDetail.quantity = quantity;
        await existingProductDetail.save();
        return res.json({
            message: "Cập nhật thông tin sản phẩm thành công",
            updatedProductDetail: existingProductDetail
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
}

export const removeProductDetailbyID = async (req, res) => {
    try {
        const { product_id, size } = req.params;
        const productDetail = await ProductDetail.findOneAndDelete({ product_id, size });
        if (!productDetail) {
            return res.status(404).json({
                message: "Không tìm thấy sản phẩm để xóa"
            });
        }
        return res.json({
            message: "Xóa sản phẩm thành công",
            productDetail,
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
}
export const removeAllProductDetail = async (req, res) => {
    try {
        const { product_id } = req.params;
        const result = await ProductDetail.deleteMany({ product_id });
        if (!result) {
            return res.status(404).json({
                message: "Không tìm thấy sản phẩm để xóa"
            });
        }
        return res.json({
            message: "Xóa sản phẩm thành công",
            result,
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
}

