const express = require("express");
const indexRoutes = require("./routes");
const usersRoutes = require("./routes/users");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

const app = express();

console.log("indexRoutes typeof:", typeof indexRoutes);
console.log("usersRoutes typeof:", typeof usersRoutes);
console.log("notFound typeof:", typeof notFound);
console.log("errorHandler typeof:", typeof errorHandler);


// Middleware
app.use(express.json());

// Routes
app.use("/", indexRoutes);
app.use("/users", usersRoutes);

// 404 + Error
app.use(notFound);
app.use(errorHandler);

module.exports = app;