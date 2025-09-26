module.exports = (err, req, res, next) => {
  console.error("❌ Fehler:", err);
  res.status(500).json({ error: "Interner Serverfehler" });
};