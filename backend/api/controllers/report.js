const Report = require("../../models/report");

exports.getReport = (req, res, next) => {
  Report.find()
    .then((result) => {
      res.status(200).json({ reports: result });
    })
    .catch((err) => console.log(err));
};
