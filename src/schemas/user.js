import joi from 'joi'

export const userSchema = joi.object({
    userName: joi.string().required(),
    fullName: joi.string().required(),
    gender: joi.string().required(),
    email: joi.string().email().required().messages({
        "string.email": "Email không đúng định dạng ",
        "string.empty": "Email không được để trống",
        "any.required": "Email là bắt buộc",
    }),
    password: joi.string().required().min(6).max(20).messages({
        "string.min": "Password phải có ít nhất {#limit} ký tự",
        "string.max": "Password nhiều nhất {#limit} ký tự",
        "string.empty": "Password không được để trống",
        "any.required": "Password là bắt buộc",
    }),
    confirmPassword: joi.string().valid(joi.ref("password")).required().messages({
        "any.only": "ConfirPassword là bắt buộc",
        "any.required": "Vui lòng nhập lại Password"
    }),
    role_id: joi.string(),
});


export const signinSchema = joi.object({
    email: joi.string().email().required().messages({
        "string.email": "email không đúng định dạng",
        "string.empty": "email không được để trông",
        "any.required": "email là bắt buộc"
    }),
    password: joi.string().required().min(6).max(20).messages({
        "string.empty": "password không được để trống",
        "string.empty": "passwork là bắt buộc",
        "string.min": "passwork phải ít nhất {#limit} ký tự",
        "string.max": "passwork nhiều nhất {#limit} ký tự",
    })
})