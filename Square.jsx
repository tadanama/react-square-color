import React from "react";

function Square({ color }) {
	return (
		<article>
			<div className="square">
				<h1>{color}</h1>
			</div>
		</article>
	);
}

export default Square;
