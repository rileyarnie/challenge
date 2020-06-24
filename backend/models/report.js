const mongoose = require("mongoose");
const schema = mongoose.Schema;

reportSchema = new schema(
  {
    programTime: {
      type: String,
    },
    eventName: {
      type: String,
    },
    message: {
      type: String,
    },
    actualTime: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Report", reportSchema);
