import { electronApi } from '../communication/electron';

export function logToElectronMiddleware({ getState }) {
  return (next) => (action) => {
    electronApi.sendMessage(createLogObjectFrom(action));
    next(action);
  };
}

function createLogObjectFrom(action) {
  return {
    redux_action: action.type,
    action
  };
}
