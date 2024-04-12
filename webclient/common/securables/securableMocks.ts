/* 
for testing purposes
contains mocks of all the structures used in DN's Vynamic POS
to calculate whether a cashier can prform a given action
*/

export const securableMocks = {
  // from securableFunctions.js
  functionIds: {
    'button-add-discount-on-basket': 10043,
    'button-remove-discount-on-basket': 10044
  },
  // from noSecurableFunctions.js
  noSecurableFunctions: {
    'button-to-basket': 1
  },
  // mock of state.session.permissionRequestsInfo
  permissionRequestsInfo: [
    {
      permissionRequest: {
        typeId: 10043,
        payload: {
          basketId: '609a5cdb-d756-42ea-a4cd-b5b26bf727ed'
          // itemId: '0610fc6d-24f0-4e9c-9a60-dd260fb0e632'
        },
        expirationDateTime: '2999-12-21T00:00:00.0000000+03:00',
        correlationId: 'b03a084a-f4c4-4d9b-8634-97ce30d38409',
        approverId: 0,
        approverName: null,
        isPending: true,
        functionName: 'button-add-discount-on-basket'
      },
      remainingTime: '00:10:00'
    }
  ],
  // mock of state.appState.securables
  securables: [
    {
      securableId: 10077,
      permissions: [19, 21] // permissionLevels
    }
  ],
  // copy af a dictionary which values are used
  // in securables
  permissionLevels: {
    approval: 19,
    granted: 20,
    onDemand: 21
  }
};
