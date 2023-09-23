import joi from "joi";

export const productSchema = joi.object({
    name: joi.string().required(),
    price: joi.number().required(),
    cate_id: joi.string().required(),
    description: joi.string(),
    rate: joi.number(),
});