import joi from "joi";

export const productSchema = joi.object({
    name: joi.string().required(),
    images: joi.array().required(),
    price: joi.number().required(),
    price_sale: joi.number(),
    brand_id: joi.string().required(),
    status: joi.string(),
    description: joi.string(),
    rate: joi.number(),
});