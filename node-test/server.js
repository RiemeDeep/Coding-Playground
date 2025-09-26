require("dotenv").config();
const { PORT } = require("./src/config/env");
const app = require("./src/app");

app.listen(PORT, () => {
  console.log(`🚀 Server läuft auf http://localhost:${PORT}`);
});
