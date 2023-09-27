import joi from "joi";
export const paymentSchema=joi.object({
    cart_id:joi.number().required(),
    amount:joi.string().required(),
    user_id:joi.number().required(),
    status:"Đang chuẩn bị",
    price:joi.number().required(),
    quantity:joi.number().required(),
    date:joi.date().required(),
    bill:joi.number().required(),
});