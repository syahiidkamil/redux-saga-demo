import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SearchBarPageComponent from "./components/SearchBarPage.component";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchBarPageComponent />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
