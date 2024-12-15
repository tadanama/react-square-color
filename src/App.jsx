import Square from "../Square";
import Input from "./Input";
import { useState } from "react";

function App() {
	const [color, setColor] = useState("");
	const [whiteText, setWhiteText] = useState(false);

	return (
		<>
			<main className="app">
				<Square color={color} whiteText={whiteText}/>
				<Input
					color={color}
					setColor={setColor}
					whiteText={whiteText}
					setWhiteText={setWhiteText}
				/>
			</main>
		</>
	);
}

export default App;
