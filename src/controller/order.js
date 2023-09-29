// import payment from "../model/payment";

// export const addToPayment = async (req, res) => {
//   const { cart_id, amount, user_id, status, price, quantity, date, bill } = req.body;

//   try {
//     const paymentItem = new payment({
//       cart_id,
//       amount,
//       user_id,
//       status,
//       price,
//       quantity,
//       date,
//       bill,
//     });
//     const savedPaymentItem = await paymentItem.save();
//     res.status(201).json(savedPaymentItem);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }

// }

// export const getPaymentDetails = async (req, res) => {
//   try {
//     const paymentItems = await payment.find().populate('cart_id').populate('amount').populate('user_id').populate('status').populate('price').populate('date').populate('bill');
//     res.status(200).json(paymentItems);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// }