import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import Home from "./component/home.jsx";

let counter = 0;
setInterval(function () {
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	console.log(four, three, two, one);
	counter++;

	ReactDOM.render(
		<Home
			digitoOne={one}
			digitoTwo={two}
			digitoThree={three}
			digitoFour={four}
		/>,
		document.querySelector("#app")
	);
}, 1000);
