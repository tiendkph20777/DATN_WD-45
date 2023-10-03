import joi from "joi";

export const cartDetailSchema = joi.object({
    cart_id: joi.string.required(),
    product_detail_id: joi.string().required(),
    quantity: joi.number().required(),
});