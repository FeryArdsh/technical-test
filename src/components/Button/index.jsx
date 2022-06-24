import React from "react";
import style from "./style.module.css";
const Button = ({ text, width }) => {
	return (
		<button className={style.button} style={{ ...width }}>
			{text}
		</button>
	);
};

export default Button;
