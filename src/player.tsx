import React from "react";

const Player = () => {
	return (
		<div id="player-container">
			<audio id="audio" preload="auto"></audio>
			<input type="range" id="progress" value="0" />
			<div id="player-controls">
				<input
					type="image"
					src={require("./images/back.png")}
					alt="back"
					height="30px"
					id="previous"
				/>
				<input
					type="image"
					src={require("./images/play.png")}
					alt="play"
					height="30px"
					id="control"
				/>
				<input
					type="image"
					src={require("./images/forward.png")}
					alt="next"
					height="30px"
					id="next"
				/>
			</div>
			<p>Now Playing: {}</p>
			<p>
				{} / {}
			</p>
		</div>
	);
};
export default Player;
