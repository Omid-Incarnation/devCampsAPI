const express = require("express");
const dotenv = require("dotenv");

// Load evn vars
dotenv.config({ path: "./config/config.env" });

const app = express();

app.get("/api/v1/bootcamps", (req, res) => {
  res.status(200).json({ success: true, mes: "Show all bootcamps" });
});

app.get("/api/v1/bootcamps/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, mes: `Show a bootcamp ${req.params.id}` });
});

app.post("/api/v1/bootcamps", (req, res) => {
  res.status(200).json({ success: true, mes: "Create new bootcamp" });
});

app.put("/api/v1/bootcamps/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, mes: `Update bootcamp ${req.params.id}` });
});

app.delete("/api/v1/bootcamps/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, mes: `Delete bootcamp ${req.params.id}` });
});

// app.get("/", (req, res) => {
//   // res.send("<h1>Hello from Express</h1>");

//   //By the method you can set the status and send data as a JSON
//   res.status(200).json({ success: true, data: { id: 1 } });
// });

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port: ${PORT}`
  )
);
