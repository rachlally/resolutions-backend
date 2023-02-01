const express = require('express');
const router = express.Router();
const userRoutes = require("./userController");
const resolutionRoutes = require("./resolutionController");
const jwt = require('jsonwebtoken')

router.get('/', (req,res)=>{
    res.send("Homepage")
})
router.get('/token',(req, res)=>{
    const token = jwt.sign({
        name:"rachel"
    }, process.env.JWT_SECRET, {
        expiresIn:'2h'
    })
    res.json({
        token
    })
})
router.get('/readToken', (req,res)=>{
    const token =(req.headers.authorization.split(" ")[1]);
    const tokenData = jwt.verify(token,process.env.JWT_SECRET)
    console.log(tokenData)
    res.send("Check logs!")
})
router.use('/api/users',userRoutes)
router.use('/api/resolutions', resolutionRoutes)

module.exports = router;