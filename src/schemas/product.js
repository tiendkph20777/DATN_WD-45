import joi from "joi";

export const productSchema = joi.object({
    name: joi.string().required(),
    image: joi.string().required(),
    image01: joi.string(),
    image02: joi.string(),
    image03: joi.string(),
    image04: joi.string(),
    price: joi.number().required(),
    price_sale: joi.number(),
    brand_id: joi.string().required(),
    color: joi.string().required(),
    status: joi.string(),
    detail_id: joi.string().required(),
    description: joi.string(),
    rate: joi.number(),
});