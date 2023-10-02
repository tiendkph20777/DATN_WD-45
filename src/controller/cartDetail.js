import CartDetail from "../model/cartDetail";
import ProductDetail from "../model/product_detail";

export const createCartDetail = async (req, res) => {
  const { productDetailId } = req.params;

  const contentProductDetail = await ProductDetail.findById(
    productDetailId
  );
  
  console.log(contentProductDetail)
  const {
    user_id,
    isGuest,
    // product_detail_id,
    cart_id,
  } = req.body;

  const colorNew = contentProductDetail.color;
  const priceNew = contentProductDetail.price;
  const sizeNew = contentProductDetail.size;

  try {
    const newCartDetail = await CartDetail.create({
      user_id,
      isGuest,
      // product_detail_id,
      color: colorNew,
      price: priceNew,
      size: sizeNew,
      cart_id,
    });

    return res.status(201).json({ newCartDetail });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updateCartDetail = async (req, res) => {
  const { cartDetailId } = req.params;
  const { color, price, quantity } = req.body;

  try {
    const updatedCartDetail = await CartDetail.findByIdAndUpdate(
      cartDetailId,
      { color, price, quantity },
      { new: true }
    );

    if (!updatedCartDetail) {
      return res.status(404).json({ message: "CartDetail not found" });
    }

    return res.status(200).json({ updatedCartDetail });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteCartDetail = async (req, res) => {
  const { cartDetailId } = req.params;

  try {
    const deletedCartDetail = await CartDetail.findByIdAndDelete(cartDetailId);

    if (!deletedCartDetail) {
      return res.status(404).json({ message: "CartDetail not found" });
    }

    return res.status(200).json({ message: "CartDetail deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
export const getCartDetailById = async (req, res) => {
  const { cartDetailId } = req.params;

  try {
    const cartDetail = await CartDetail.findById(cartDetailId);

    if (!cartDetail) {
      return res.status(404).json({ message: "CartDetail not found" });
    }

    return res.status(200).json({ cartDetail });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
