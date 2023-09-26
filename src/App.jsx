import React from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./routes/Home";
import AboutPage from "./routes/About";
import ShoppingCart from "./routes/Cart";
import ProductList from "./routes/ProductList";
import ProductDetail from "./routes/ProductDetail";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import Root from "./routes/Root";
import { AppProvider } from "./context/AppContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "cart", element: <ShoppingCart /> },
      { path: "products", element: <ProductList /> },
      { path: "products/:productId", element: <ProductDetail /> },
      { path: "sign-in", element: <SignIn /> },
      { path: "sign-up", element: <SignUp /> },
    ],
  },
]);

const App = () => {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
};

export default App;
