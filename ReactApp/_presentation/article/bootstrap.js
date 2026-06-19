import { createRoot } from "react-dom/client";
import { App } from "./App";

startTheApp();

export default function startTheApp() {
  const domNode = document.getElementById("app_root");
  const root = createRoot(domNode);
  root.render(App());
}
