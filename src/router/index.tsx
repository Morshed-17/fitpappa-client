import MainLayout from "@/layouts/MainLayout";
import AboutUs from "@/pages/AboutUs";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import ProductsManagement from "@/pages/ProductsManagement";

import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products-management",
        element: <ProductsManagement />,
      },
    ],
  },
]);

export default router;
