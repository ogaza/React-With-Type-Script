export const ADMIN_PANEL_SHOW = 'ADMIN_PANEL_SHOW';
export const ADMIN_PANEL_HIDE = 'ADMIN_PANEL_HIDE';
export const ADMIN_PANEL_TOGGLE = 'ADMIN_PANEL_TOGGLE';

export function showAdminPanel() {
  return {
    type: ADMIN_PANEL_SHOW
  };
}

export function hideAdminPanel() {
  return {
    type: ADMIN_PANEL_HIDE
  };
}

export function toggleAdminPanel() {
  return {
    type: ADMIN_PANEL_TOGGLE
  };
}
