const express = require('express');
const router = express.Router();
const userRoutes = require("./userController");
const resolutionRoutes = require("./resolutionController");

router.get('/', (req,res)=>{
    res.send("Homepage")
})
router.use('/api/users',userRoutes)
router.use('/api/resolutions', resolutionRoutes)

module.exports = router;