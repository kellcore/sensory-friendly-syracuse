const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Back end's connected to the front end on the dashboard page");
});

module.exports = router;

// router.get only needs "/", not "/about"