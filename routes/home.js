const express = require("express");
const rootDir = require("../utility/path");
const router = express.Router();
const path = require("path");

router.get("/", (req, res)=>{
    res.sendFile(path.join(rootDir, "views", "home.html"));
});

module.exports = router;

