const express = require("express")
const router = express.Router();

router.post("/log")
router.get("/logs")
router.get("/report")
router.post("/integrity/check")
router.get("/health")

module.exports = router;