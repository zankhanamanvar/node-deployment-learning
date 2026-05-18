const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "CI/CD Working...............",
    timestamp: new Date(),
  });
});

module.exports = router;