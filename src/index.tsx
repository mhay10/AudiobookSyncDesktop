import Player from "./player";
import Tracks from "./tracks";
import { createRoot } from "react-dom/client";
import "./styles.css";

const App = () => {
	return (
		<div>
			<h2>Audiobook Sync</h2>
			<p>Sync audiobooks cross platform</p>
			<Player />
			<br />
			<Tracks />
		</div>
	);
};

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);
