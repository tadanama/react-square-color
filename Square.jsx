import React from "react";

function Square({ color, whiteText }) {
	return (
		<article>
			<div
				className="square"
				style={{ backgroundColor:  color, color: whiteText ? "white" : null }}
			>
				<h1>{color}</h1>
			</div>
		</article>
	);
}

export default Square;
