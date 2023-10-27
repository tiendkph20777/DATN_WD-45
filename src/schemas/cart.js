import joi from "joi";

export const cartSchema = joi.object({
    user_id: joi.string().required(),
    products: joi.array().items(
        joi.object({
            productDetailId: joi.string().required(),
            quantity: joi.number().required()
        })
    )
});