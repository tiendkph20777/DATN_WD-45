import express from "express";
import { getPaymentDetails, addToPayment } from "../controller/payment";
const paymentRouter=express.Router();
//Them vao don hang
paymentRouter.post('/payment/add',addToPayment);
//lay thong tin don hang
paymentRouter.get('/payment',getPaymentDetails);

export default paymentRouter;