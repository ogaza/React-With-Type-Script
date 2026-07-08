import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit";
import { tasksSlice } from "./tasks";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = makeStore();

export const storeDispatch = (component: string, action: any) => {
  store.dispatch(action);
};

const listenerMiddleware = createListenerMiddleware();

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
