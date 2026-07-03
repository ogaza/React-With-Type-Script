import { MainDisplayShell } from "..";
import { store } from "../../appState";
import { Provider } from "react-redux";

export function App() {
  return (
    <Provider store={store}>
      <MainDisplayShell />
    </Provider>
  );
}
