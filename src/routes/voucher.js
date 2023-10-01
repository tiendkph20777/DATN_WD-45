import express from 'express';
import { createVoucher, getAllVouchers, getVoucherById, removeVoucher, updateVoucherById } from '../controller/voucher';

const voucherRouter = express.Router();

voucherRouter.post('/voucher/add', createVoucher);
voucherRouter.get('/voucher', getAllVouchers);
voucherRouter.get('/voucher/:id', getVoucherById);
voucherRouter.put('/voucher/:id/update', updateVoucherById);
voucherRouter.delete('/voucher/:id', removeVoucher);

export default voucherRouter;
