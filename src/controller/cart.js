import Cart from '../model/cart';
import CartDetail from '../model/cartDetail';
import ProductDetail from '../model/productDetail';

export const addToCart = async (req, res) => {
  const productDetailID = req.params.productDetailID;
  console.log(productDetailID);
  const user_id = req.body.user_id;
  const quantity = req.body.quantity;
  try {
    const productDetailFind = await ProductDetail.findById(productDetailID);
    console.log(productDetailFind);
    if (!productDetailFind) {
      return res.status(404).json({ message: 'Chi tiết sản phẩm không tồn tại' });
    }
    // Thiếu trường hợp nếu dữ liệu trùng thì tăng số lượng lên, hoặc có thể truyền lớn hơn 2 số lượng vào trong cart
    //Thiếu hàm xóa sản phẩm trong giỏ hàng
    const newCartDetail = await CartDetail.create({
      productDetailID,
      color: productDetailFind.color,
      price: productDetailFind.price,
      size: productDetailFind.size,
      quantity,
      transience: productDetailFind.price * quantity
    });

    console.log(newCartDetail);

    const cart = await Cart.findOne({ user_id });
    if (!cart) {
      return res.status(404).json({ message: 'Giỏ hàng không tồn tại' });
    }
    if (quantity > productDetailFind.quantity) {
      return res.status(400).json({ message: 'Số lượng vượt quá giới hạn cho phép' });
    }
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


