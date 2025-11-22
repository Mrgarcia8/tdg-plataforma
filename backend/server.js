const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const connectDB = require("./config/db");

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// RUTAS
app.use("/modules", require("./routes/modules"));
app.use("/auth", require("./routes/auth"));

// conexión a db deshabilitada para desarrollo sin Mongo
// connectDB();

app.listen(4000, () => {
  console.log("Server listening 4000");
});

