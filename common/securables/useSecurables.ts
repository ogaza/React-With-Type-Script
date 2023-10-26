import { useSelector } from 'react-redux';
// import { noSecurableFunctions } from '../resources/noSecurableFunctions';
// import { permissionLevels } from '../resources/permissionLevels';
// import { functionIds as securableFunctionIds } from '../resources/securableFunctions';

export const permissionLevels = {
  approval: 19,
  granted: 20,
  onDemand: 21
};

export const securableFunctionIds = {
  'button-status-bar-connection-reconnect': 10117,
  'button-status-bar-devices-printing-mode': 10001
};
export const noSecurableFunctions = {
  'button-to-basket': 1,
  'button-to-mops': 2
};

const permissionStates = {
  notAllowed: 0,
  allowed: 1,
  onDemand: 2,
  requested: 3
};

function useSecurables(securables, permissionRequests, activeBasketId) {
  //   const securables = useSelector((state) => state.appState.securables);
  //   const permissionRequests = useSelector(
  //     (state) => state.session.permissionRequestsInfo
  //   );
  //   const activeBasketId = useSelector((store) => store.baskets.activeBasket);

  return {
    getPermissionsFor(functionKey) {
      const permissions = getFunctionPermissionSettings(
        securables,
        noSecurableFunctions
      )(functionKey);

      return permissions;
    },
    getSecuredFunctionPermissionRequest: getSecuredFunctionPermissionRequest(
      permissionRequests,
      activeBasketId
    )
  };
}

function getSecuredFunctionPermissionRequest(permissionRequests, activeBasketId) {
  return function (functionKey, securedItemId) {
    const securableFunctionId = securableFunctionIds[functionKey];
    const securedFunctionPermissionRequest = permissionRequests.find((x) => {
      const { permissionRequest } = x;
      const requestIsForGivenFunction =
        permissionRequest.typeId === securableFunctionId;
      const requestIsForBasket = !!(permissionRequest.payload?.basketId || false);

      if (!requestIsForGivenFunction || !requestIsForBasket)
        return requestIsForGivenFunction;

      return (
        activeBasketId === permissionRequest.payload.basketId &&
        permissionRequest.payload.itemId === securedItemId
      );
    });

    return securedFunctionPermissionRequest;
  };
}

function getFunctionPermissionSettings(securables, safeFunctionIds) {
  return function (functionKey) {
    return getFunctionPermissions(functionKey, securables, safeFunctionIds);
  };
}

function getFunctionPermissions(functionKey, securables = [], safeFunctionIds = []) {
  let hasGrantedPermission = false;
  let permissionIsOnDemand = false;
  const isSafeFunction = Object.keys(safeFunctionIds).some(
    (key) => key === functionKey
  );

  if (isSafeFunction) {
    return { functionKey, hasGrantedPermission: true, permissionIsOnDemand };
  }

  const securableFunctionId = securableFunctionIds[functionKey];

  if (securableFunctionId === undefined) {
    return { functionKey, hasGrantedPermission, permissionIsOnDemand };
  }

  const securable = securables.find((p) => p.securableId === securableFunctionId);

  hasGrantedPermission = !!securable?.permissions?.includes(
    permissionLevels.granted
  );
  permissionIsOnDemand = !!securable?.permissions?.includes(
    permissionLevels.onDemand
  );

  return { functionKey, hasGrantedPermission, permissionIsOnDemand };
}

function calculatePermissionState({
  hasGrantedPermission,
  permissionIsOnDemand,
  permissionRequest
}) {
  if (hasGrantedPermission) {
    return permissionStates.allowed;
  }
  if (permissionRequest) {
    return permissionStates.requested;
  }

  if (permissionIsOnDemand) {
    return permissionStates.onDemand;
  }

  return permissionStates.notAllowed;
}

export {
  calculatePermissionState,
  getFunctionPermissionSettings,
  getSecuredFunctionPermissionRequest,
  permissionStates,
  useSecurables
};
