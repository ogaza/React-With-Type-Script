import { electronApi } from '../../src/communication/electron';

export function logToElectronMiddleware({ getState }) {
  return (next) => (action) => {
    electronApi.sendMessage(createLogObjectFrom(action));
    next(action);
  };
}

function createLogObjectFrom(action) {
  return {
    reduxAction: action
  };
}
