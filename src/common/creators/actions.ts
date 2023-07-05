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

    addItem: function (item) {
      return {
        type: actionTypes.ADD,
        payload: item
      };
    },

    itemAdded: function (item) {
      return {
        type: actionTypes.ADDED,
        payload: item
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
    ADDED: `${namespace}_ADDED`,
    REMOVE: `${namespace}_REMOVE`,
    REMOVED: `${namespace}_REMOVED`,
    EDIT: `${namespace}_EDIT`,
    EDITED: `${namespace}_EDITED`,
    OPERATION_FAILED: `${namespace}_OPERATION_FAILED`
  };
}
