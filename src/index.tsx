import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import bridge from "@vkontakte/vk-bridge";

bridge.send("VKWebAppInit");

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
