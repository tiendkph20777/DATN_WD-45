import { productDetailSchema } from '../schemas/product_detail';
import ProductDetail from '../model/product_detail'
import Product from '../model/product'
export const getAllProductDetails = async (req, res) => {
    try {
        const productDetails = await ProductDetail.find();
        if (!productDetails || productDetails.length === 0) {
            return res.status(404).json({
                message: "Không có chi tiết sản phẩm nào được tìm thấy"
            });
        }
        return res.json(productDetails);
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
}

export const getProductDetailById = async (req, res) => {
    try {
        const productDetail = await ProductDetail.findById(req.params.id);
        if (!productDetail) {
            return res.status(404).json({
                message: "Không tìm thấy chi tiết sản phẩm"
            });
        }
        return res.json(productDetail);
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
        const { size, color, id_product } = req.body;
        const existingProduct = await Product.findById({ _id: id_product });
        if (!existingProduct) {
            return res.status(400).json({
                message: "Sản phẩm không tồn tại"
            });
        }
        const existingProductDetail = await ProductDetail.findOne({ size, color, id_product });
        if (existingProductDetail) {
            return res.status(400).json({
                message: "Chi tiết sản phẩm đã tồn tại"
            });
        }
        const productDetail = await ProductDetail.create(req.body);
        return res.status(201).json(productDetail);
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
}

export const updateProductDetail = async (req, res) => {
    try {
        const id = req.params.id;
        const { size, color, id_product } = req.body;
        const existingProduct = await Product.findOne({ _id: id_product });
        if (!existingProduct) {
            return res.status(400).json({
                message: "Sản phẩm không tồn tại"
            });
        }
        const existingProductDetail = await ProductDetail.findOne({
            size,
            color,
            id_product,
        });
        if (existingProductDetail) {
            return res.status(400).json({
                message: "Chi tiết sản phẩm đã tồn tại"
            });
        }
        const productDetail = await ProductDetail.findByIdAndUpdate(
            id,
            req.body,
            {
                new: true,
            }
        );
        if (!productDetail) {
            return res.json({
                message: "Cập nhật chi tiết sản phẩm không thành công"
            });
        }
        return res.json({
            message: "Cập nhật chi tiết sản phẩm thành công",
            productDetail,
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
}

export const removeProductDetail = async (req, res) => {
    try {
        const productDetail = await ProductDetail.findByIdAndDelete(req.params.id);
        if (!productDetail) {
            return res.status(404).json({
                message: "Không tìm thấy chi tiết sản phẩm để xóa"
            });
        }
        return res.json({
            message: "Xóa chi tiết sản phẩm thành công",
            productDetail,
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
}

