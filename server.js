// Imports
require("dotenv").config();
const PORT = process.env.PORT;
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const app = express();

// Middleware
app.use(logger("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: 200,
    msg: "default route and nothing to see here",
  });
});

// Controllers
const groupRouter = require("./controllers/groupRoutes");
app.use("/groups", groupRouter);

app.listen(PORT, () => console.log("Server running on port 4000!"));
