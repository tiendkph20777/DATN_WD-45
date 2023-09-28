import joi from "joi";

export const quantitySchema = joi.object({
    product_id: joi.string().required(),
    size: joi.number().required(),
    count: joi.number().required(),
});