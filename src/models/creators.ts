import { sendMessage } from '../socket/socket';

export function createApi(namespace) {
  return {
    get: function (options = {}) {
      return sendMessage(`${namespace}:get`, options);
    },
    post: function (item) {
      return sendMessage(`${namespace}:post`, item);
    },
    delete: function (itemId) {
      return sendMessage(`${namespace}:delete`, itemId);
    }
  };
}

export function createListenersRegistrator(namespace, actions) {
  return function registerListeners(store, socket) {
    socket.on(`${namespace}:get`, (data) => {
      console.log(`got ${namespace} from socket connection: `, data);

      store.dispatch(actions.setItems(data));
    });

    socket.on(`${namespace}:delete`, (data) => {
      const { itemId } = data;
      console.log(`${namespace} deleted from socket connection: `, itemId);

      store.dispatch(actions.itemDeleted(itemId));
    });
  };
}

export function createReducer(namespace, initialState) {
  const itemActionTypes = getActionTypes(namespace);

  return function reducer(state = initialState, action) {
    if (action.type === itemActionTypes.GET) {
      return {
        collection: [],
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
        ...item
      };
      const newState = [...state.collection, placeholder];

      return {
        collection: newState,
        state: 'LOADING'
      };
    }

    if (action.type === itemActionTypes.EDIT || action.type === itemActionTypes.EDITED) {
      const {
        payload: { item },
        payload: {
          item: { id }
        }
      } = action;
      const { collection } = state;

      const itemToEdit = collection.find((x) => x.id === id);
      const idx = collection.findIndex((x) => x.id === id);

      const itemState = action.type === itemActionTypes.EDIT ? 'LOADING' : 'LOADED';
      collection.splice(idx, 1, { ...itemToEdit, ...item, itemState });
      const newCollection = collection;

      return {
        ...state,
        collection: newCollection
      };
    }

    if (action.type === itemActionTypes.EDITED) {
      const { payload: item } = action;
    }

    if (action.type === itemActionTypes.REMOVE) {
      const {
        payload: { id }
      } = action;
      const { collection } = state;

      const itemToRemove = collection.find((x) => x.id === id);
      const idx = collection.findIndex((x) => x.id === id);

      collection.splice(idx, 1, { ...itemToRemove, id: -id });
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

export function actionsCreator(namespace) {
  const actionTypes = getActionTypes(namespace);

  return {
    getItems: function (options = {}) {
      return {
        type: actionTypes.GET,
        payload: options
      };
    },

    setItems: function (items) {
      return {
        type: actionTypes.SET,
        payload: items
      };
    },

    addItem: function (text) {
      return {
        type: actionTypes.ADD,
        payload: {
          text,
          completed: false,
          created: Date.now()
        }
      };
    },

    editItem: function (item) {
      return {
        type: actionTypes.EDIT,
        payload: {
          item
        }
      };
    },

    itemEdited: function (item) {
      return {
        type: actionTypes.EDITED,
        payload: {
          item
        }
      };
    },

    deleteItem: function (id) {
      return {
        type: actionTypes.REMOVE,
        payload: {
          id
        }
      };
    },

    itemDeleted: function (id) {
      return {
        type: actionTypes.REMOVED,
        payload: {
          id
        }
      };
    },

    operationFailure: function (message) {
      return {
        type: actionTypes.OPERATION_FAILED,
        payload: {
          message
        }
      };
    }
  };
}

export function getActionTypes(namespace) {
  return {
    GET: `${namespace}_GET`,
    SET: `${namespace}_SET`,
    ADD: `${namespace}_ADD`,
    REMOVE: `${namespace}_REMOVE`,
    REMOVED: `${namespace}_REMOVED`,
    EDIT: `${namespace}_EDIT`,
    EDITED: `${namespace}_EDITED`,
    OPERATION_FAILED: `${namespace}_OPERATION_FAILED`
  };
}