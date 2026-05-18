const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "API Working Fine, testing with CI-CD.......",
    timestamp: new Date(),
  });
});

module.exports = router;