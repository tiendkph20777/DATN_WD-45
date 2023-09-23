
import { productSchema } from '../schemas/product';
import Product from '../model/product'
import Category from '../model/category'
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        if (!products || products.length === 0) {
            return res.status(404).json({
                message: "Không có sản phẩm nào trong cơ sở dữ liệu"
            });
        }
        return res.json(products);
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
}


export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({
                message: "Không tìm thấy sản phẩm"
            });
        }
        return res.json(product);
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
}


export const createProduct = async (req, res) => {
    try {
        const { error } = productSchema.validate(req.body, { abortEarly: false });
        if (error) {
            return res.status(400).json({
                message: error.details.map((err) => err.message)
            });
        }
        const { name, cate_id } = req.body;
        const existingCategory = await Category.findOne({ _id: cate_id });
        if (!existingCategory) {
            return res.status(400).json({
                message: "Danh mục không tồn tại"
            });
        }
        const existingProduct = await Product.findOne({ name });
        if (existingProduct) {
            return res.status(400).json({
                message: "Sản phẩm đã tồn tại"
            });
        }
        const product = await Product.create(req.body);
        return res.status(201).json(product);
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
}



export const updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, cate_id } = req.body;
        const existingCategory = await Category.findOne({ _id: cate_id });
        if (!existingCategory) {
            return res.status(400).json({
                message: "Danh mục không tồn tại"
            });
        }
        const existingProduct = await Product.findOne({
            name,
            _id: { $ne: id }
        });
        if (existingProduct) {
            return res.status(400).json({
                message: "Sản phẩm đã tồn tại"
            });
        }
        const product = await Product.findByIdAndUpdate(
            id,
            req.body,
            {
                new: true,
            }
        );
        if (!product) {
            return res.json({
                message: "Cập nhật sản phẩm không thành công"
            });
        }
        return res.json({
            message: "Cập nhật sản phẩm thành công",
            product,
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
}


export const removeProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({
                message: "Không tìm thấy sản phẩm để xóa"
            });
        }
        return res.json({
            message: "Xóa sản phẩm thành công",
            product,
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
}

