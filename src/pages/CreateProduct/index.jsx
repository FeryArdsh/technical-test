import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";
const CreateProduct = () => {
	const initialValue = { name: "", price: "", description: "" };
	const [formValue, setFormValue] = useState(initialValue);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValue({ ...formValue, [name]: value });
	};

	const postData = (e) => {
		e.preventDefault();
		axios.post("https://62b5ad3ada3017eabb200a98.mockapi.io/api/v1/detail", {
			name: formValue.name,
			price: formValue.price,
			description: formValue.description,
		});
		alert("data berhasil disimpan");
	};

	console.log(formValue);
	return (
		<div className="container">
			<div className="text-center mt-5">
				<h3>Create New Product</h3>
			</div>
			<div className="row">
				<span>Halaman Ini Belum Selesai di Slicing</span>
			</div>
			<div className="row mt-5">
				<form onSubmit={postData}>
					<label>Name Product</label>
					<input
						className="form-control mb-5"
						type="text"
						placeholder="Default input"
						name="name"
						onChange={handleChange}
					/>
					<label>Price</label>
					<input
						className="form-control mb-5"
						type="text"
						placeholder="Default input"
						name="price"
						onChange={handleChange}
					/>
					<label>Description</label>
					<input
						className="form-control mb-3"
						type="text"
						placeholder="Default input"
						name="description"
						onChange={handleChange}
					/>
					<button type="submit">Submit</button>
				</form>

				<Link className="mt-4" to="/">
					Back To Home
				</Link>
			</div>
		</div>
	);
};

export default CreateProduct;
