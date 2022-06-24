import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { Link, useParams } from "react-router-dom";
import kemeja from "../../components/CardProduct/kemeja.png";
import Button from "../../components/Button";
import BtnCart from "../../components/Button/BtnCart";
import axios from "axios";

const DetailProduct = () => {
	const idProduct = useParams();
	console.log(idProduct);

	const [detailProduct, setDetailProduct] = useState([]);

	const getData = async () => {
		try {
			const request = await axios.get(
				`https://62b5ad3ada3017eabb200a98.mockapi.io/api/v1/detail/${idProduct.id}`
			);
			setDetailProduct(request.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	console.log(detailProduct);
	return (
		<div className="container">
			<div className="row text-center mt-5">
				<h3 className="mb-0">Detail Product</h3>
			</div>
			<div className="row mt-5">
				<nav aria-label="breadcrumb">
					<ol className="breadcrumb">
						<li className="breadcrumb-item">
							<Link to="/">All Products</Link>
						</li>
						<li className="breadcrumb-item active" aria-current="page">
							Detail Product
						</li>
					</ol>
				</nav>
			</div>

			<div className={style.container__detail}>
				<div className="row">
					<div className="col-5">
						<img
							src={detailProduct.image}
							alt=""
							className={style.img__product}
						/>
					</div>
					<div className="col-7">
						<div className="row d-flex align-">
							<div className="col-9">
								<h3 className="fw-bold">{detailProduct.name}</h3>
								<p>{detailProduct.description}</p>
							</div>
							<div className="col-9 mt-4 d-flex justify-content-between align-items-center">
								<div className="select">
									<h5 className="fw-semibold mb-0">Select Size</h5>
									<button className={style.btn__size}>M</button>
									<button className={style.btn__size}>L</button>
									<button className={style.btn__size}>XL</button>
								</div>
								<div className="mt-3">
									<h2>Rp. {detailProduct.price}</h2>
								</div>
							</div>
							<div className="col-10 mt-4 pe-4 d-flex justify-content-between align-items-center">
								<div className="select">
									<h5 className="fw-semibold mb-0">Quantity</h5>
									<div className="input-group mb-3">
										<button className="btn btn-outline-secondary" type="button">
											-
										</button>
										<input
											type="text"
											className="form-control"
											placeholder=""
										/>
										<button className="btn btn-outline-secondary" type="button">
											+
										</button>
									</div>
								</div>
								<div>
									<BtnCart
										width={{
											paddingLeft: "15px",
											paddingRight: "15px",
											marginRight: "10px",
										}}
									/>
									<Button
										text="Shop Now"
										width={{ paddingLeft: "40px", paddingRight: "40px" }}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailProduct;
