import React from "react";

function Square({ color }) {
	return (
		<article>
			<div className="square" style={{ backgroundColor: color}}>
				<h1>{color}</h1>
			</div>
		</article>
	);
}

export default Square;
