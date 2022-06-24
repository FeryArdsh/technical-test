import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";
import CardProduct from "../../components/CardProduct";
import axios from "axios";

const AllProducts = () => {
	const [data, setData] = useState([]);

	const getData = async () => {
		try {
			const request = await axios.get(
				"https://62b5ad3ada3017eabb200a98.mockapi.io/api/v1/detail"
			);
			setData(request.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			<div className="container">
				<div className="row d-flex align-items-center mt-5">
					<div className="col-8 offset-2">
						<div className="d-flex justify-content-center">
							<h3 className="mb-0">WELCOME TO OUR STORE</h3>
						</div>
					</div>
					<div className="col-2">
						<Link
							to="/admin"
							className={`mb-0 text-decoration-none ${style.go__admin}`}
						>
							Go to Admin Page{" "}
							<i className="bi bi-arrow-right-circle-fill ms-1"></i>
						</Link>
					</div>
				</div>
				<div className="row mt-5">
					<span>All Products</span>
				</div>

				<div className="row">
					<div className="col-12">
						<div className="d-flex justify-content-between flex-wrap">
							<CardProduct data={data} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AllProducts;
