const express = require("express");
const router= express.Router;
const {location_add}=require('../controllers/wareController')
router.post('/',location_add);
module.exports=router;