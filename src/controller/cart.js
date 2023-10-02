import Cart from '../model/cart';

export const addToCart = async (req, res) => {
  const { id_user, id_product } = req.body;

  try {
    const cartItem = new Cart({
      id_user,
      id_product
    });

    const savedCartItem = await cartItem.save();
    res.status(201).json(savedCartItem).message("Thêm Thành công")
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
export const getCartDetails = async (req, res) => {
  try {
    const cartItems = await Cart.find().populate('id_user').populate('id_product');
    res.status(200).json(cartItems).message("Thông tin")
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

