import React from "react";

function Input({ color, setColor }) {
	return (
		<section>
			<input
				type="text"
				name="color"
				id="color-input"
				value={color}
				onChange={(e) => setColor(e.target.value)}
			/>
		</section>
	);
}

export default Input;
