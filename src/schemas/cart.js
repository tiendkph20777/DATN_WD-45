import joi from "joi";

export const cartSchema = joi.object({
    user_id: joi.string().required(),
    transience: joi.string()
});