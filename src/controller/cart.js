import Cart from '../model/cart';
import CartDetail from '../model/cartDetail';
import Product from '../model/product';
import ProductDetail from '../model/productDetail';

export const getCartDetail = async (req, res) => {
  const { cart_id } = req.body
  try {
    const cartDetail = await CartDetail.find();
    if (!cartDetail || cartDetail.length === 0) {
      return res.status(404).json({
        message: "Không có sản phẩm nào trong cơ sở dữ liệu"
      });
    }
    return res.json(cartDetail);
  } catch (error) {
    return res.status(400).json({
      message: error.message
    });
  }
}


export const addToCart = async (req, res) => {
  const productDetailID = req.params.productDetailID;
  // console.log(productDetailID);
  const user_id = req.body.user_id;
  const quantity = req.body.quantity;
  const cart = await Cart.findOne({ user_id });
  const cartID = JSON.stringify(cart._id);
  console.log(cartID);
  try {
    const arrayCartFind = cart.products
    // console.log(arrayCartFind);
    // const productDetailF = cart.products.find(item => CartDetail.findById(item._id));
    for (let i = 0; i < cart.products.length; i++) {
      // console.log(CartDetail.findById(JSON.stringify(cart.products[i]._id)));
      // console.log(CartDetail.find());
    }
    if (!cart) {
      return res.status(404).json({ message: 'Giỏ hàng không tồn tại' });
    }
    if (quantity > productDetailFind.quantity) {
      return res.status(400).json({ message: 'Số lượng vượt quá giới hạn cho phép' });
    }
    const productDetailFind = await ProductDetail.findById(productDetailID);
    if (!productDetailFind) {
      return res.status(404).json({ message: 'Chi tiết sản phẩm không tồn tại' });
    }
    const newCartDetail = await CartDetail.create({
      cart_id: cartID,
      product_detail_id: productDetailID,
      quantity,
      transience: productDetailFind.price * quantity
    });

    console.log(newCartDetail);


    cart.products.push(newCartDetail);
    await cart.save();
    res.status(201).json(cart);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getCart = async (req, res) => {
  const user_id = req.params.user_id;
  try {
    const cart = await Cart.findOne({ user_id });
    console.log(cart)
    if (!cart) {
      return res.status(404).json({ message: 'Giỏ hàng không tồn tại' });
    }
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}





