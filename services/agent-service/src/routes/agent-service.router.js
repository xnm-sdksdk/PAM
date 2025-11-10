const express = require("express")
const router = express.Router();

router.post("/execute")
router.get("/status/:sessionId")
router.post("/restrict")
router.post("/report")
router.post("/session/logs")
router.post("/credentials/request")

module.exports = router;