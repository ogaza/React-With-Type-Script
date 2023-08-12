import { AppLogger } from './appLogger';
import { ConsoleLogger } from './consoleLogger';
import { logToElectronMiddleware } from './logToElectronMiddleware';

const logger = new AppLogger(new ConsoleLogger());

export { logger, logToElectronMiddleware };
