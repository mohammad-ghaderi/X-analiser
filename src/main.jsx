import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TablesProvider } from './contexts/TablesContext';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TablesProvider>
      <App />
    </TablesProvider>
  </React.StrictMode>
);
