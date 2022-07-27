const jwt = require('jsonwebtoken');
const joi = require('joi');
const passwordComplexity = require('joi-password-complexity');
const Joi = require('joi');
const {sign, verify} =  require('jsonwebtoken');

const createToken = async (register)=>{
    console.log('Reached here in create token')
    const accessToken = await sign({email:register.email,_id:register._id},"jwtscreteplschange");
    console.log(`Access Token from utils ${accessToken}`)

    return accessToken;
}

const validateToken = (req,res,next)=>{
    const accessToken = req.cookie["jwt"];
    console.log(" in validateToken",accessToken);
    
    if(!accessToken){
        return res.status(400).json({error:"User not Authenticated!"})
    }
    try{
        const validToken = verify(accessToken,"jwtscreteplschange");
        if(validToken){
            req.auth = true;
            return next()
        }
    }catch(err){
        return req.status(400).json({error:err,"authtoken":"authenticated"});
    }
}





  // Check if mobile user is authenticated
const  authenticateUser=  (req, res, next) =>{
    try {
        if (req.headers.authorization.startsWith("Bearer ")) {
            token = req.headers.authorization.substring(7, req.headers.authorization.length);
            if (token) {
                jwt.verify(token, "jwtscreteplschange", async (err, register) => {
                    
                    if (err){
                        if(err.message == 'jwt expired') return res.status(403).json({ status: false, message: 'Token Expired' });
                        return res.status(403).json({ status: false, message: 'Invalid Token' });
                    }
                    
                    req.register = await registerModel.findOne({ _id: register.id })
                    next();
                })
            }else{
                throw Error('Authentication Token not found') 
            }   
        } else {
            //Error
            throw Error('Authorization token not starting with bearer')  
        }
    } catch (e) {
        console.log(e)
        return res.status(401).json({ status: false, message: 'Authentication Token not found' })
    }
}




module.exports = {createToken,validateToken,authenticateUser};

