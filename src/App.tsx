import { RouterProvider } from "react-router";
import { createBrowserRouter } from 'react-router-dom';
import { Gallery } from "./components/Gallery/Gallery";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component() { return <Gallery /> },
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
