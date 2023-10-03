import joi from "joi";

export const cartSchema = joi.object({
    user_id: joi.string().required(),
    products: joi.array().items(
        joi.object({
            cart_detail_id: joi.string().required()
        })
    )
});