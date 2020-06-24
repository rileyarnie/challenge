const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

const trackerRoutes = require("./api/routes/tracker");
const reportRoutes = require("./api/routes/report");

app.use(bodyParser.json());
app.use(cors());

app.use("/api/tracker", trackerRoutes);
app.use("/api/reports", reportRoutes);

mongoose
  .connect(
    "mongodb+srv://rileyarnie:ys4prKQaA-q_KRK@node.oawyk.mongodb.net/tracker?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((result) => {
    app.listen(port, console.log("node server running"));
    console.log("connected to database successfully");
  })
  .catch((err) => console.log(err));
