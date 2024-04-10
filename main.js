const joi = require('./validator');

function realizarInversao (req, res) {
    const frase = req.query.text;

    if (!frase) {
        res.render('digitarFrase');
    } else {
        const { error } = joi.validaInverter.validate({ frase });
        
        try {
            if (error) {
                throw new Error(error.message, 400);
            }
        } catch (error) {
            res.send(error.message);
        }

        const fraseInvertida = frase.split('').reverse().join('');
        res.render('inversor', { originalText: frase, reversedText: fraseInvertida });
    }
}

// Rota que recebe 2 valores por POST (usuário e senha) e faz a validação
// Se for uma solicitação GET, renderiza o formulário de login
function realizarLogin (req, res) {

    if (req.method === 'GET') {
        res.render('logar');
    } else if (req.method === 'POST') {
        const { usuario, senha } = req.body;
        const { error } = joi.validaLogin.validate({ usuario, senha });
        
        try {
            if (error) {
                throw new Error(error, 400);
            }
        } catch (error) {
            res.send(error.message);
        }
        
        const respostaAcesso = (senha === usuario + usuario);    
        res.render('login', { accessGranted: respostaAcesso });
    }
}

module.exports =  { realizarInversao, realizarLogin };