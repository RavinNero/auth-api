var jwt = require('jsonwebtoken');
require("dotenv-safe").config();

module.exports = {
    async verifyJWT(request, response, next){
        var token = request.headers['x-access-token'];

        if (!token){
            return response.status(401).json({ 
                auth: false, 
                message: 'No token provided.' 
            });
        } 
        
        jwt.verify(token, process.env.SECRET, function(err, decoded) {
            if (err){
                return response.status(500).json({ 
                    auth: false, 
                    message: 'Failed to authenticate token.' 
                });
            } 
            
            // se tudo estiver ok, salva no request para uso posterior
            request.userId = decoded.id;
            next();
        });
    },
}