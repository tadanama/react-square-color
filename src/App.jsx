import Square from "../Square";
import Input from "./Input";
import { useState } from "react";

function App() {
	const [color, setColor] = useState("");

	return (
		<>
			<main className="app">
				<Square color={color} />
				<Input color={color} setColor={setColor} />
			</main>
		</>
	);
}

export default App;
