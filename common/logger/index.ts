import { AppLogger } from './appLogger';
import { logToElectronMiddleware } from './logToElectronMiddleware';
import { logsSavingConfig } from './config';

const logger = new AppLogger();

export { logger, logToElectronMiddleware, logsSavingConfig };
