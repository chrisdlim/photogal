import { RouterProvider } from "react-router";
import { createBrowserRouter } from 'react-router-dom';
import { GalleryList } from "./components/GalleryList";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component() { return <GalleryList /> },
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
