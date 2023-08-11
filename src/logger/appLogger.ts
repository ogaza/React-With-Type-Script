import { electronApi } from '../communication/electron';
import { ConsoleLogger } from './consoleLogger';

export class AppLogger {
  consoleLogger: ConsoleLogger;
  constructor() {
    this.consoleLogger = new ConsoleLogger();
  }

  log(message?: any, ...optionalParams: any[]): void {
    this.consoleLogger.log(message, optionalParams);

    electronApi.sendMessage({ message, optionalParams });
  }
}
