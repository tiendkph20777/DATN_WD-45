import joi from "joi";

export const voucherSchema = joi.object({
    code: joi.string().required(),
    value: joi.number().required(),
    quantity: joi.number().required(),
    date_start: joi.date().default(Date.now),
    date_end: joi.date().default(Date.now),
    status: joi.boolean(),
});