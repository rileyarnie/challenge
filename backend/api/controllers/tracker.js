const Report = require("../../models/report");
const moment = require("moment");

exports.startTrackers = (req, res, next) => {
  const actualTime = new Date().toLocaleTimeString();
  const programTime = moment()
    .startOf("day")
    .add(req.body.startTime, "seconds")
    .format("LTS");
  const eventName = "START!!";
  const message = req.body.message;

  const report = new Report({
    programTime,
    eventName,
    message,
    actualTime,
  });
  report
    .save()
    .then((result) => { 
      console.log("Report added successfully");
      res.status(200).json({ report: result });
    })
    .catch((err) => console.log(err));
};

exports.stopTrackers = (req, res, next) => {
  const actualTime = new Date().toLocaleTimeString();
  const programTime = moment()
    .startOf("day")
    .add(req.body.stopTime, "seconds")
    .format("LTS");
  const eventName = "STOP!!";
  const message = req.body.message;

  const report = new Report({
    programTime,
    eventName,
    message,
    actualTime,
  });
  report
    .save()
    .then((result) => {
      console.log("Report added successfully");
      res.status(200).json({ report: result });
    })
    .catch((err) => console.log(err));
};

exports.logTrackers = (req, res, next) => {
  const actualTime = new Date().toLocaleTimeString();
  const programTime = moment()
    .startOf("day")
    .add(req.body.reportTime, "seconds")
    .format("LTS");
  const eventName = "REPORT!!";
  const message = req.body.message;

  const report = new Report({
    programTime,
    eventName,
    message,
    actualTime,
  });
  report
    .save()
    .then((result) => {
      console.log("Report added successfully");
      res.status(200).json({ report: result });
    })
    .catch((err) => console.log(err));
};


