import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./router/index.tsx";
import { store } from "./redux/store.ts";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div>
      <Toaster />
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  </React.StrictMode>
);
