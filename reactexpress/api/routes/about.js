const express = require('express');
const router = express.Router();

router.get("/about", (req, res) => {
    const message = "Back end's connected to the front end on the about page";
    res.send({ message });
});

module.exports = router;