import React from "react";
import style from "./style.module.css";
const BtnCart = ({ width }) => {
	return (
		<button className={style.button} style={{ ...width }}>
			<i className="bi bi-cart-dash-fill"></i>
		</button>
	);
};

export default BtnCart;
