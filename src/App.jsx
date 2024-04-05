import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layout
import RootLayout from "./Layout/RootLayout";

// pages
import Home from "./Pages/Home";
import Catalog from "./Pages/Catalog";
import Korzina from "./Pages/Korzina";
import Favorite from "./Pages/Favorite";
import Compare from "./Pages/Compare";

import { Toaster } from "react-hot-toast";
import ProductDetail from "./Pages/ProductDetail";
import PageNotFound from "./Pages/PageNotFound";
import CatalogLayout from "./Layout/CatalogLayout";

const App = () => {
  // router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <PageNotFound />,
      children: [
        {
          index: true,
          element: <Home />,
        },

        {
          path: "catalog",
          element: <CatalogLayout />,
          children: [
            {
              index: true,
              element: <Catalog />,
            },
            {
              path: ":id",
              element: <ProductDetail />,
            },
          ],
        },
        {
          path: "korzina",
          element: <Korzina />,
        },
        {
          path: "favorite",
          element: <Favorite />,
        },
        {
          path: "compare",
          element: <Compare />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
};

export default App;
