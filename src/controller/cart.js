
import Cart from "../model/cart";
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
    const { idProductDetail, user_id } = req.params;

    const findIDCart = await Cart.findOne({ user_id });
    const idUserCart = findIDCart._id;

    const findProductDetail = await ProductDetail.findOne({ _id: idProductDetail });

    const existingCartDetail = findIDCart.cartDetails.find(detail => detail.productDetailId.toString() === findProductDetail._id.toString());

    if (existingCartDetail) {
      existingCartDetail.quantity += 1;
    } else {
      const product = new CartDetail({
        productDetailId: findProductDetail._id,
        quantity: 1
      });

      findIDCart.cartDetails.push(product);
    }
    await findIDCart.save();

    res.status(200).json({ message: 'Sản phẩm đã được thêm vào giỏ hàng thành công.' });
  } catch (error) {
    res.status(400).json({ message: 'Có lỗi xảy ra: ' + error.message });
  }
};

export const getCart = async (req, res) => {
  try {

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}





