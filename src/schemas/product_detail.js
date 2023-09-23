import joi from "joi";


export const productDetailSchema = joi.object({
    id_product: joi.string().required(),
    size: joi.number().required(),
    color: joi.string().required(),
    quantity: joi.number().required(),
});