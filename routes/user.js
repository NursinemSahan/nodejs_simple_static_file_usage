const express = require("express");
const router = express.Router();
const rootDir = require("../utility/path");
const path = require("path");

router.get("/", (req, res)=>{
    res.sendFile(path.join( rootDir,"views", "user.html"));
});

module.exports = router