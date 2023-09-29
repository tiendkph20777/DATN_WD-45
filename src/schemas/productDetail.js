import joi from "joi";

export const productDetailSchema = joi.object({
    product_id: joi.string().required(),
    size: joi.number().required(),
    quantity: joi.number().required(),
});