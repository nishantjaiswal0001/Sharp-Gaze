import React from "react";
import Home from "../Pages/Home";
import { Routes, Route } from "react-router-dom";
import AllProducts from "../Pages/AllProducts";
import Men from "../Pages/Men";
import Women from "../Pages/Women";

import DescriptionPage from "../components/Description/DescriptionPage";
import AllshoesD from "../Pages/Shoes";
import Cart from "../Pages/Cart";
import WishList from "../Pages/WishList";
import Login from "../Pages/Login";
import Register from "../Pages/SignUp";
import Checkout from "../Pages/Checkout";
import Authentication from "../PrivateRoute/Authentication";
import MyAccount from "../Pages/MyAccount";
import AdminPage from "../Admin/AdminPage";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<AllProducts />} />
        <Route path="/" element={<Men />} />
        <Route path="/" element={<Women />} />
        <Route path="/" element={<AllshoesD />} />
        <Route path="/" element={<DescriptionPage />} />
        <Route path="/" element={<Cart />} />
        <Route
          path="/wishlist"
          element={
            <Authentication>
              <WishList />
            </Authentication>
          }
        />
        <Route path="/" element={<Login />} />
        <Route path="/" element={<MyAccount />} />

        <Route path="/" element={<Register />} />
        <Route
          path="/"
          element={
            <Authentication>
              <Checkout />
            </Authentication>
          }
        />
        <Route
          path="/"
          element={
            <Authentication>
              <AdminPage />
            </Authentication>
          }
        />
      </Routes>
    </div>
  );
};

export default AllRoutes;
