import { getActionTypes } from './actions';

export function createReducer(namespace, initialState) {
  const itemActionTypes = getActionTypes(namespace);

  return function reducer(state = initialState, action) {
    if (action.type === itemActionTypes.GET) {
      return {
        // collection: [],
        ...state,
        state: 'LOADING'
      };
    }

    if (action.type === itemActionTypes.SET) {
      const {
        payload: { items }
      } = action;
      return {
        collection: items,
        state: 'LOADED'
      };
    }

    if (action.type === itemActionTypes.ADD) {
      const { payload: item } = action;

      const placeholder = {
        id: 0,
        ...item,
        state: 'LOADING'
      };
      const newState = [...state.collection, placeholder];

      return {
        collection: newState,
        state: 'LOADING'
      };
    }

    if (action.type === itemActionTypes.ADDED) {
      const {
        payload: { newItem }
      } = action;
      const { collection } = state;

      const idx = collection.findIndex((x) => x.id === 0);
      collection.splice(idx, 1, { ...newItem });
      const newState = [...collection];

      return {
        collection: newState,
        state: 'LOADED'
      };
    }

    if (action.type === itemActionTypes.EDIT) {
      const {
        payload: { item },
        payload: {
          item: { id, selected }
        }
      } = action;
      const { collection } = state;

      const itemToEdit = collection.find((x) => x.id === id);
      const idx = collection.findIndex((x) => x.id === id);

      const itemState = 'LOADING';
      collection.splice(idx, 1, { ...itemToEdit, ...item, state: itemState });
      const newCollection = collection;

      if (!!selected && action.type === itemActionTypes.EDIT) {
        collection.forEach((x) => {
          if (x.id === id) {
            return;
          }
          x.selected = undefined;
        });
      }

      return {
        ...state,
        collection: newCollection
      };
    }

    if (action.type === itemActionTypes.EDITED) {
      const {
        payload: { item },
        payload: {
          item: { id }
        }
      } = action;
      const { collection } = state;

      const itemToEdit = collection.find((x) => x.id === id);
      const idx = collection.findIndex((x) => x.id === id);

      const itemState = 'LOADED';
      collection.splice(idx, 1, { ...itemToEdit, ...item, state: itemState });
      const newCollection = collection;

      return {
        ...state,
        collection: newCollection
      };
    }

    if (action.type === itemActionTypes.REMOVE) {
      const {
        payload: { id }
      } = action;
      const { collection } = state;

      const itemToRemove = collection.find((x) => x.id === id);
      const idx = collection.findIndex((x) => x.id === id);

      collection.splice(idx, 1, { ...itemToRemove, state: 'LOADING' });
      // collection.splice(idx, 1, { ...itemToRemove, id: -id, state: 'LOADING' });
      const newCollection = collection;

      return {
        ...state,
        collection: newCollection
      };
    }

    if (action.type === itemActionTypes.REMOVED) {
      const {
        payload: { id }
      } = action;
      const { collection } = state;
      const newCollection = collection.filter((x) => Math.abs(x.id) !== id);
      return {
        ...state,
        collection: newCollection
      };
    }

    return state;
  };
}
