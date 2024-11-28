import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import InputMood from "./components/InputMood.tsx";
import Playlist from "./components/Playlist.tsx";
import CustomError from "./components/CustomError.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <CustomError />,
    children: [
      {
        index: true,
        element: <InputMood />,
        errorElement: <CustomError />,
      },
      {
        path: "/playlist",
        element: <Playlist />,
        errorElement: <CustomError />,
      },
      {
        path: "/error",
        element: <CustomError />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
