import { createBrowserRouter } from "react-router-dom";
import Admin from "../Pages/Admin/Admin";
import AdminCustomers from "../Pages/AdminCustomer/AdminCustomers";
import CartView from "../Pages/CartView/CartView";
import Home from "../Pages/Home/Home";
import Layout from "../Pages/Layout/Layout";
import OrderList from "../Pages/OrderList/OrderList";
import ProductListView from "../Pages/ProductListView/ProductListView";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/productlistview",
        element: <ProductListView></ProductListView>,
      },
      {
        path: "/cartview",
        element: <CartView></CartView>,
      },
      {
        path: "/admin",
        element: <Admin></Admin>,
      },
      {
        path: "/admin/customerslist",
        element: <AdminCustomers></AdminCustomers>,
      },
      {
        path: "/admin/orderlist",
        element: <OrderList></OrderList>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
