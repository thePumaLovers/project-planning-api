const mongoose = require('mongoose')

let mongoURL= ""
if (process.env.NODE_ENV === "development") {
    mongoURL = process.env.DB_URL;
} else {
  mongoURL = "mongodb://127.0.0.1/projectPlanning"

}
mongoose.connect(mongoURL)
module.exports = mongoose