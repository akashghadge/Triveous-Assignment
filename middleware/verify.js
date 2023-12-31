const jwt = require("jsonwebtoken")

const verify = (req, res, next) => {
    let accessToken = req.body.token;
    if (!accessToken) {
        return res.status(403).send()
    }
    try {
        //use the jwt.verify method to verify the access token
        //throws an error if the token has expired or has a invalid signature
        let payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
        res.locals.name = payload.name;
        res.locals.id = payload.id;
        next()
    }
    catch (e) {
        //if an error occured return request unauthorized error
        res.locals.currentuser = null;
        return res.status(401).send()
    }
}

module.exports = verify;
