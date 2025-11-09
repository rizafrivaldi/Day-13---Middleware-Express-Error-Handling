//server.js//
const express = require("express");
const app = express();
const logger = require("./middleware/logger");
const auth = require("./middleware/auth");
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

//global error handler//
app.use((err, req, res, next) => {
  console.error("Error caught by handler:", err.message);
  res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

{
  /*
const app = express();
const port = 3000;

//Middleware global//
app.use(logger);
app.use(express.json());

//Route public//
app.get("/", (req, res) => {
  res.send("API Middleware Demo");
});

//Route private (need auth)//
app.use("/users", auth, userRoutes);



//Error handler default//
app.use((err, req, res, next) => {
  console.error("Error Middleware:", err.message);
  res.status(500).json({ error: "Terjadi kesalahan server!" });
});

app.listen(port, () =>
  console.log("Server running in http://localhost:${port}")
);

//server.js (bagian paling bawah)//
app.use((err, req, res, next) => {
  console.error("Error Stack:", err.stack);
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});
*/
}
