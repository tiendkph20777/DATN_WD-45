import joi from "joi";

export const cartSchema = joi.object({
    id_product: joi.string().required(),
    id_user: joi.string().required(),
});