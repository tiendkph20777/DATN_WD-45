import express from 'express';
import { createVoucher, getAllVouchers, getVoucherByCode, removeVoucher, updateVoucherById } from '../controller/voucher';
import { checkPermission } from '../middleware/checkPermission';

const voucherRouter = express.Router();

voucherRouter.post('/voucher/add', checkPermission, createVoucher);
voucherRouter.get('/voucher', checkPermission, getAllVouchers);
voucherRouter.get('/voucher/:code', getVoucherByCode);
voucherRouter.put('/voucher/:id/update', checkPermission, updateVoucherById);
voucherRouter.delete('/voucher/:id', checkPermission, removeVoucher);

export default voucherRouter;
