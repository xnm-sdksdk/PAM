const express = require("express")
const router = express.Router();

router.post("/register")
router.post("/login")
router.post("/refresh")
router.get("/me")
router.patch("/me")
router.delete("/me")
router.get("/roles")
router.post("/events/user-created")

module.exports = router;