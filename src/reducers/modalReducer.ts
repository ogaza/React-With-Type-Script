import { IAction } from '../actions/action';
import { actionTypes } from '../actions/actionTypes';
import { IModalState } from '../store/state';

const initialState = <IModalState>{ isVisible: false };

export const modal = (state: IModalState = initialState, action: IAction<boolean>): IModalState => {
  if (action.type === actionTypes.SHOW_MODAL) {
    return {
      ...state,
      isVisible: true
    };
  }

  if (action.type === actionTypes.HIDE_MODAL) {
    return {
      ...state,
      isVisible: false
    };
  }
  if (action.type === actionTypes.TOGGLE_MODAL) {
    const { isVisible } = state;

    return {
      ...state,
      isVisible: !isVisible
    };
  }

  return state;
};
