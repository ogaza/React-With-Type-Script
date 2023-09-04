import { logLevels } from './logLevels';

export const logsSavingConfig = {
  minLogLevel: logLevels.info,
  reduxActions: {
    storingEnabled: false,
    actionLogLevel: logLevels.info
  }
};
