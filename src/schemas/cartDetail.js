import joi from "joi";

export const cartDetailSchema = joi.object({
    product_detail_id: joi.string().required(),
    quantity: joi.number().required(),
});