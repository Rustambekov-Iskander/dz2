import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Products from "../pages/products/Products";
import ProductPage from "../pages/product-page/ProductPage";
import UserProfile from "../pages/user-profile/UserProfile";

const AppRouter = ({phoneNumber}) => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="/contact" element={<Contact phone={phoneNumber} />} />
            <Route path="/users/:id" element={<UserProfile />} />
        </Routes>
    );
};

export default AppRouter;
