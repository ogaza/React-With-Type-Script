import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit";
import { tasksSlice } from "./tasks";
import { setupListeners } from "@reduxjs/toolkit/query";
import { EffectsContainer } from "../effects";

export const listenerMiddleware = createListenerMiddleware({
  onError: onListenerHandlerError,
});

function onListenerHandlerError(error: any, errorInfo: any) {
  console.log("error: ", error);
  console.log("errorInfo: ", errorInfo);
}

export const store = makeStore();

EffectsContainer.Instance.listenerMiddleware = listenerMiddleware;

export function makeStore() {
  const store = configureStore({
    reducer: {
      tasks: tasksSlice.reducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().prepend(listenerMiddleware.middleware),
  });
  // configure listeners using the provided defaults
  // optional, but required for `refetchOnFocus`/`refetchOnReconnect` behaviors
  setupListeners(store.dispatch);

  return store;
}

export function registerListener(
  listenerMiddleware: any,
  actionCreator: any,
  effect: any
) {
  listenerMiddleware.startListening({
    actionCreator,
    effect: effect,
  });
}

export const storeDispatch = (component: string, action: any) => {
  store.dispatch(action);
};
