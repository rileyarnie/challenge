const Report = require("../../models/report");
const moment = require("moment");
const tz = require("moment-timezone");

exports.startTrackers = (req, res, next) => {
  // const actualTime = new Date().toLocaleTimeString({
  //   timeZone: "Africa/Nairobi",
  // });
  const actualTime = moment().tz("Africa/Nairobi").format("LTS");
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
      res.status(200).json({ report: result });
    })
    .catch((err) => console.log(err));
};
