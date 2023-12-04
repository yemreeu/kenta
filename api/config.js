const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  mongoDBURL: process.env.mongoDBURL,
};