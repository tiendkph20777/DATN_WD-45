import joi from "joi";

export const cartDetailSchema = joi.object({
    productDetailId: joi.string().required(),
    quantity: joi.number(),
});