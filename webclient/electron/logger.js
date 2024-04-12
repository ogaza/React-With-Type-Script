const winston = require('winston');
const moment = require('moment');
const path = require('node:path');

const now = moment().format('YYYYMMDD');
// const now = moment().format('YYYYMMDD-HHmmss');

function createLogger(name) {
  const directory = path.join('logs', name, `${now}.log`);

  return winston.createLogger({
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: directory })
    ]
  });
}

module.exports = { createLogger };
