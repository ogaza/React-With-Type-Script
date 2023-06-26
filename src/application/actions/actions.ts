export const actionTypes = getActionTypes('APP');
export const actions = actionsCreator(actionTypes);

export function actionsCreator(actionTypes) {
  return {
    start: function () {
      return {
        type: actionTypes.START
      };
    }
  };
}

export function getActionTypes(namespace) {
  return {
    START: `${namespace}_START`
    //   GET: `${namespace}_GET`
    //   SET: `${namespace}_SET`,
    //   ADD: `${namespace}_ADD`,
    //   REMOVE: `${namespace}_REMOVE`,
    //   REMOVED: `${namespace}_REMOVED`,
    //   OPERATION_FAILED: `${namespace}_OPERATION_FAILED`
  };
}
