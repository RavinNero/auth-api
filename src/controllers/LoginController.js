const express = require('express');
require("dotenv-safe").config();

var jwt = require('jsonwebtoken');

module.exports = {
    async index(request, response){
        return response.json({message: "Tudo ok por aqui!"});

    },

    async login(request, response){
        //esse teste abaixo deve ser feito no seu banco de dados
        if(request.body.user === 'luiz' && request.body.pwd === '123'){
            //auth ok
            const id = 1; //esse id viria do banco de dados
            var token = jwt.sign({ id }, process.env.SECRET, {
              expiresIn: 300 // expires in 5min
            });
            return response.json({ auth: true, token: token });
        }
        
        return response.status(500).json({message: 'Login inválido!'});
    },

    async logout(request, response){
        return response.json({ auth: false, token: null });
        
    },

    async listClients(request, response){
        console.log("Retornou todos clientes!");
        return response.json([{id:1,nome:'luiz'}]);
    },

}