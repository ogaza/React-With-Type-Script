import { IItem } from '../../models/item';
import { actionTypes } from '../actions/actionTypes';
import { IItemsState } from '../store/state';

const initialState = <IItemsState>{ collection: [] };

export const items = (state: IItemsState = initialState, action): IItemsState => {
  if (action.type === actionTypes.SET_ITEMS) {
    const {
      payload: { items }
    } = action;
    return {
      collection: items,
      state: 'LOADED'
    };
  }

  if (action.type === actionTypes.ADD_ITEM) {
    const { payload: item } = action;

    const placeholder: IItem = {
      id: 0,
      ...item
    };
    const newState = [...state.collection, placeholder];

    return {
      collection: newState,
      state: 'LOADING'
    };
  }

  if (action.type === actionTypes.REMOVE_ITEM) {
    const {
      payload: { id }
    } = action;
    const { collection } = state;

    const itemToRemove = collection.find((x) => x.id === id);
    const idx = collection.findIndex((x) => x.id === id);

    collection.splice(idx, 1, { ...itemToRemove, id: 0 });
    const newItems = collection;

    return {
      collection: newItems,
      state: 'LOADING'
    };
  }

  return state;
};
