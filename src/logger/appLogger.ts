// import moment from 'moment';
import { electronApi } from '../communication/electron';
import { logLevels } from './logLevels';

const minLogLevel = logLevels.trace;
// const logTimestampFormat = 'YYYY-MM-DD HH:mm:ss:sss';

export class AppLogger {
  logger;
  constructor(logger) {
    this.logger = logger;
  }

  log(message?: any, ...optionalParams: any[]): void {
    const logLevel = logLevels.info;
    invokeLoggingAndSendLogMessageToElectron(this.logger, {
      message,
      optionalParams,
      logLevel
    });
  }

  debug(message?: any, ...optionalParams: any[]): void {
    const logLevel = logLevels.debug;
    invokeLoggingAndSendLogMessageToElectron(this.logger, {
      message,
      optionalParams,
      logLevel
    });
  }

  warn(message?: any, ...optionalParams: any[]): void {
    const logLevel = logLevels.warning;
    invokeLoggingAndSendLogMessageToElectron(this.logger, {
      message,
      optionalParams,
      logLevel
    });
  }

  error(message?: any, ...optionalParams: any[]): void {
    const logLevel = logLevels.error;
    invokeLoggingAndSendLogMessageToElectron(this.logger, {
      message,
      optionalParams,
      logLevel
    });
  }
}

export function withLoogingToElectron(logger) {
  return {
    log(message?: any, ...optionalParams: any[]): void {
      const logLevel = logLevels.info;
      invokeLoggingAndSendLogMessageToElectron(logger, {
        message,
        optionalParams,
        logLevel
      });
    },

    warn(message?: any, ...optionalParams: any[]): void {
      const logLevel = logLevels.warning;
      invokeLoggingAndSendLogMessageToElectron(logger, {
        message,
        optionalParams,
        logLevel
      });
    },

    error(message?: any, ...optionalParams: any[]): void {
      const logLevel = logLevels.error;
      invokeLoggingAndSendLogMessageToElectron(logger, {
        message,
        optionalParams,
        logLevel
      });
    }
  };
}

function invokeLoggingAndSendLogMessageToElectron(
  logger,
  { message, optionalParams, logLevel }
) {
  invokeLogging(logger, message, optionalParams, logLevel);
  if (logLevel < minLogLevel) {
    return;
  }
  electronApi.sendMessage({ message, logLevel, optionalParams });
}

function invokeLogging(logger, message, optionalParams, logLevel) {
  const funcName = Object.entries(logLevels)[logLevel][0];
  const loggingFunc = logger[funcName];

  loggingFunc(message, ...optionalParams);
}
