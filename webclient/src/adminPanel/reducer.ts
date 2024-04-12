import { ADMIN_PANEL_HIDE, ADMIN_PANEL_SHOW, ADMIN_PANEL_TOGGLE } from './actions';

export function adminPanel(state = { showAdminPanel: false }, action) {
  if (action.type === ADMIN_PANEL_SHOW) {
    return { ...state, showAdminPanel: true };
  }

  if (action.type === ADMIN_PANEL_HIDE) {
    return { ...state, showAdminPanel: false };
  }

  if (action.type === ADMIN_PANEL_TOGGLE) {
    return { ...state, showAdminPanel: !state.showAdminPanel };
  }

  return state;
}
