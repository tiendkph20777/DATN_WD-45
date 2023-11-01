
import Cart from "../model/cart";
import cartDetail from "../model/cartDetail";
import CartDetail from "../model/cartDetail";
import ProductDetail from "../model/productDetail";
export const getCartDetail = async (req, res) => {
  try {

    return res.json();
  } catch (error) {
    return res.status(400).json({
      message: error.message
    });
  }
}
export const tokenUser = async (req, res) => {
  try {
    const { token } = req.body;
    console.log(token);
    const decodedToken = jwt.verify(token, process.env.KEY_RAR);
    console.log(decodedToken);
  } catch (error) {
    return res.status(400).json({
      message: error.message
    });
  }
}


export const addToCart = async (req, res) => {
  try {
    const { productDetailId, user_id } = req.params;
    const cart = await Cart.findOne({ user_id: user_id });
    console.log(cart);

    if (!cart) {
      return res.status(400).json({
        message: "Giỏ hàng không tồn tại"
      });
    }

    const cartDetails = await CartDetail.find({ cart_id: cart._id });
    const findProductDetail = await ProductDetail.findById(productDetailId);

    if (!findProductDetail) {
      return res.status(400).json({
        message: "Sản Phẩm Chi Tiết Không Tồn Tại"
      });
    }

    let check = false;
    let updatedCartDetail;

    for (const detail of cartDetails) {
      if (JSON.stringify(detail.productDetailId) === JSON.stringify(findProductDetail._id)) {
        check = true;
        const quantityUpdate = detail.quantity + 1;
        updatedCartDetail = await CartDetail.updateMany(
          { cart_id: detail.cart_id, productDetailId: detail.productDetailId },
          { quantity: quantityUpdate }
        );
        await Cart.updateMany(
          { user_id: user_id },
          { $push: { cartDetails: updatedCartDetail._id } }
        );
      }
    }

    if (!check) {
      const newCartDetail = new CartDetail({
        cart_id: cart._id,
        productDetailId: findProductDetail._id,
        quantity: 1,
      });
      updatedCartDetail = await newCartDetail.save();
      await Cart.updateMany(
        { user_id: user_id },
        { $push: { cartDetails: updatedCartDetail._id } }
      );
    }

    return res.json({
      message: check ? "Sản phẩm đã được thêm vào giỏ hàng" : "Sản phẩm được tạo mới",
      CartDetail: updatedCartDetail,
      check,
    });

  } catch (error) {
    res.status(400).json({ message: 'Có lỗi xảy ra: ' + error.message });
  }
};


export const removeProductDetail = (req, res) => {
  try {

  } catch (error) {

  }
}




export const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user_id: req.params.id });
    const cartDetails = await cartDetail.find({ cart_id: cart._id });
    return res.status(201).json({
      message: "Lấy danh sách sản phẩm",
      products: cartDetails,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message
    });
  }
}





