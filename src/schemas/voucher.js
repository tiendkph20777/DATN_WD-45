import Joi from "joi";

export const voucherSchema = Joi.object({
    code: Joi.string().required(),
    value: Joi.string().required(),
    quantity: Joi.number().required(),
    date_start: Joi.date().iso().allow(null),
    date_end: Joi.date().iso().allow(null),
    status: Joi.boolean().default(false)
});
