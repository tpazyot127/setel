import React from "react";
import ReactDOM from "react-dom";

import "./assets/css/style.css";

import ListProducts from "./containers/products/ListProducts";
import FormProduct from "./containers/products/FormProduct";
import ListProductCategories from "./containers/products/ListProductCategories";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<ListProducts />} />
          <Route path="/product/add" element={<FormProduct />} />
          <Route
            path="/product_categories"
            element={<ListProductCategories />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
