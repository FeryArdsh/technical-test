import React, { useEffect, useState } from "react";
import style from "../../components/CardProduct/style.module.css";
import buttonStyle from "./style.module.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Admin = () => {
	const [data, setData] = useState([]);
	const navigate = useNavigate();

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

	const deleteProduct = (id) => {
		const del = axios
			.delete(`https://62b5ad3ada3017eabb200a98.mockapi.io/api/v1/detail/${id}`)
			.then((res) => alert("berhasil dihapus"))
			.then((res) => getData());
		console.log(id);
	};

	const editProduct = () => {
		navigate("/admin/create");
	};

	return (
		<div className="container ">
			<div className="row text-center mt-5">
				<h3>Admin Page</h3>
			</div>
			<div className="row my-5">
				<Link to="/admin/create">
					<span>
						Create New Data Product <i className="bi bi-plus-circle"></i>
					</span>
				</Link>
			</div>

			<div className="row">
				<div className="col-12">
					<div className="d-flex justify-content-between flex-wrap">
						{data.map((item) => {
							return (
								<div
									key={item.id}
									className={`card p-2 mb-5 ${style.card__container}`}
								>
									<img
										src={item.image}
										className="card-img-top rounded "
										alt="..."
									/>
									<div className="card-body p-0">
										<h6 className="card-title fw-bold m-0 mt-2">{item.name}</h6>
										<p className="card-text m-0 mb-1">Rp. {item.price}</p>
										<div className="d-flex justify-content-between">
											<button
												onClick={editProduct}
												className={buttonStyle.button}
											>
												Edit
											</button>

											<button
												onClick={(e) => deleteProduct(item.id)}
												className={buttonStyle.button__delete}
											>
												Delete
											</button>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Admin;
