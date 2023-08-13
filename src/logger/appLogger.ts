// import moment from 'moment';
import { electronApi } from '../communication/electron';
import { logsSavingConfig } from './config';
import { logLevels } from './logLevels';

const { minLogLevel } = logsSavingConfig;
// const logTimestampFormat = 'YYYY-MM-DD HH:mm:ss:sss';

export class AppLogger {
  log;
  debug;
  warn;
  error;

  constructor() {
    const { log, debug, warn, error } = console;

    this.log = withLoogingToElectron(log);
    this.debug = withLoogingToElectron(debug);
    this.warn = withLoogingToElectron(warn);
    this.error = withLoogingToElectron(error);
  }
}

export function withLoogingToElectron(func) {
  const functionName = func.name;
  const logLevelValue = logLevels[functionName] || logLevels.info;

  if (logLevelValue < minLogLevel) {
    return func;
  }

  return function (...args) {
    func(...args);
    electronApi.sendMessage({ [`${functionName}`]: [...args] });
  };
}
