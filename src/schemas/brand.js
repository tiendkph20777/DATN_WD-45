import joi from "joi";

export const brandSchema = joi.object({
    name: joi.string().required(),
});