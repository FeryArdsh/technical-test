import React from "react";
import { Route, Routes } from "react-router-dom";
import AllProducts from "../pages/AllProducts";
import DetailProduct from "../pages/DetailProduct";
import Admin from "../pages/Admin";
import CreateProduct from "../pages/CreateProduct";

const index = () => {
	return (
		<Routes>
			<Route path="/" element={<AllProducts />} />
			<Route path="detail/:id" element={<DetailProduct />} />
			<Route path="admin" element={<Admin />} />
			<Route path="admin/create" element={<CreateProduct />} />
		</Routes>
	);
};

export default index;
