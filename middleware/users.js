const jwt = require("jsonwebtoken");


module.exports = {
    validateRegister: (req, res, next) => {
        // username min length 3
        if (!req.body.username || req.body.username.length < 3) {
            return res.status(400).send({
                massage: "please enter a username with mi 3 chars"
            })
        }

        // password min 6 chars
        if (!req.body.password || req.body.username.password < 6) {
            return res.status(400).send({
                massage: "please enter a password with mi 6 chars"
            })
        }

        // password (repeat)  must match
        if (!req.body.password_repeat ||
            req.body.password_repeat != req.body.password) {
            return res.status(400).send({
                massage: "Both password must match"
            });
        }
        next();
    },
    isLoggeldIn: (req, res, next) => {
        if(!req.headers.authorization) {
            return res.status(400).send({
                message : "Your session is not valid!"
            })
        }
        try{
            const authHeader = req.headers.authorization;
            const token =  authHeader.split(' ')[1];
            const decoded = jwt.verify(token, 'SECRETKEY')
            req.userDate = decoded;
            next();
        }catch (err){
            throw err;
            return res.status(400).send({
                message : "Your session is not valid!"
            })
        }
    },




}