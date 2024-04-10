const Joi = require("joi");

const validaInverter = Joi.object({
    frase: Joi.string().min(3).required(),
});

const validaLogin = Joi.object ({
    usuario: Joi.string().min(2).max(10).required(),
    senha: Joi.string().max(20).required()
});


module.exports = { validaInverter, validaLogin };