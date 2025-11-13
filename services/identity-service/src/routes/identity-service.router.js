const express = require("express")
const router = express.Router();

router.post("/store")
router.post("/lease")
router.get("/retrieve/:id")
router.delete("/revoke/:leaseId")
router.post("/rotate")
router.get("/audit")
router.post("/vault/sync")

module.exports = router;