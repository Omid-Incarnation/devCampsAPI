const express = require("express");
const dotenv = require("dotenv");

// Load evn vars
dotenv.config({ path: "./config/config.env" });

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is runnin in ${process.env.NODE_ENV} mode on port: ${PORT}`
  )
);
