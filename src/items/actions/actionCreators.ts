import { actionTypes } from './actionTypes';

export const Actions = {
  getItems: function () {
    return {
      type: actionTypes.GET_ITEMS
    };
  },

  setItems: function (items) {
    return {
      type: actionTypes.SET_ITEMS,
      payload: items
    };
  },

  addItem: function (text) {
    return {
      type: actionTypes.ADD_ITEM,
      payload: {
        text,
        completed: false,
        created: Date.now()
      }
    };
  },

  deleteItem: function (id) {
    return {
      type: actionTypes.REMOVE_ITEM,
      payload: {
        id
      }
    };
  },

  itemDeleted: function (id) {
    return {
      type: actionTypes.ITEM_REMOVED,
      payload: {
        id
      }
    };
  },

  operationFailure: function (message) {
    return {
      type: actionTypes.ITEM_OPERATION_FAILED,
      payload: {
        message
      }
    };
  }
};
