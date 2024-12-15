import React from "react";

function Input({ color, setColor, whiteText, setWhiteText }) {
	return (
		<section>
			<input
				type="text"
				name="color"
				id="color-input"
				value={color}
				onChange={(e) => setColor(e.target.value)}
			/>
			<br />
			<button onClick={(e) => setWhiteText(!whiteText)}>
				Change text to white
			</button>
		</section>
	);
}

export default Input;
