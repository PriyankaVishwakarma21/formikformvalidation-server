const {Router} = require('express');
const router = Router();
const {saveRegister,auth,welcome,logout} = require('../controllers/RegisterControllers');
const {validateToken,authenticateUser} = require('../authenticate');
const authenticate = require('../middleware/authenticate');

router.post('/saveRegister',saveRegister);
router.post('/auth',auth);
//router.get('/welcome',validateToken,authenticateUser,welcome);
router.get('/welcomne',authenticate,welcome);
// router.get('/welcome',validateToken,authenticateUser,welcome);
module.exports=router;