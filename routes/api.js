const express = require('express');
const authMethods = require('../src/auth/AuthMethods');
const loginController = require('../src/controllers/LoginController');


const Route = express.Router();
 
Route.get('/', loginController.index);

//authentication
Route.post('/login', loginController.login)

Route.post('/logout', loginController.logout)

Route.get('/clientes', authMethods.verifyJWT, loginController.listClients)


module.exports = Route;