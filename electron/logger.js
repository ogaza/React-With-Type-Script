const winston = require('winston');
const moment = require('moment');

const now = moment().format('YYYYMMDD-HHmmss');

function createLogger() {
  return winston.createLogger({
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: `logs/${now}.log` })
    ]
  });
}

module.exports = { createLogger };
