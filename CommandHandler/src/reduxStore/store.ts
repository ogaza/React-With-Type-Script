export const store = makeStore();

export const storeDispatch = (component: string, action: any) => {
  store.dispatch(action);
};

export function makeStore() {
  return {
    dispatch: function (action: any) {
      console.log("dispatching: ", action);
    },
  };
}
