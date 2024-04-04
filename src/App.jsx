import { Button } from "@nextui-org/react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div>
      <Button color="primary">Press me</Button>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
