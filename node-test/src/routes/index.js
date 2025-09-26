// src/routes/index.js
const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.send("Hello Michael! 👋 Express ist am Start.");
});

router.get("/health", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

module.exports = router;   // <— wichtig: KEIN { router }, KEIN exports = ...