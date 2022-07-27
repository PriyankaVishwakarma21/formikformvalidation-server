
const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required : true
    },
    lastName: {
        type : String,
        required: true
    },
    email: {
        type:String,
        required:true
    },
    password :{
        type:String,
        required:true
    }
})

// module.exports = {
//     generateAuthToken : function(register){
//         const token  = jwt.sign({_id:register._id},process.env.JWTPRIVATEKEY, {expiresIn:"7d"})
//         return token
//     }
// }

// registerSchema.method.generateAuthToken=function(register){
//     const token  = jwt.sign({_id:register._id},process.env.JWTPRIVATEKEY, {expiresIn:"7d"})
//     return token
// }

// const validate = (data)=>{
//     const schems = joi.object({
//         firstName:Joi.string().required().label("First Name"),
//         lastName:Joi.string().required().label("Last Name"),
//         email:Joi.string().email().required().label("Email"),
//         password:passwordComplexity.required().label("Password")
//     })
//     return schems.validate(data)
// }

const Register = mongoose.model('Register',registerSchema);
module.exports=Register;