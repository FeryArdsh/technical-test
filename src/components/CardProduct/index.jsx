import React from "react";
import style from "./style.module.css";
import kemeja from "./kemeja.png";
import Button from "../Button";
import { Link } from "react-router-dom";

const CardProduct = ({ data }) => {
	return (
		<>
			{data.map((item) => {
				return (
					<div
						key={item.id}
						className={`card p-2 mb-5 ${style.card__container}`}
					>
						<img src={item.image} className="card-img-top rounded " alt="..." />
						<div className="card-body p-0">
							<h6 className="card-title fw-bold m-0 mt-2">{item.name}</h6>
							<p className="card-text m-0 mb-1">Rp. {item.price}</p>
							<Link to={"/detail/" + item.id}>
								<Button text="See Detail" width={{ width: "100%" }} />
							</Link>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default CardProduct;
