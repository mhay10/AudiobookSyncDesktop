import { useState } from "react";

const Player = () => {
    const [nowPlaying, setNowPlaying] = useState(null);
	const [currentPosition, setCurrentPosition] = useState(0);
	const [totalDuration, setTotalDuration] = useState(0);
	
	const formatSeconds = (seconds: number) => {
        return new Date(seconds * 1000).toISOString().slice(11, 19);
	}

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
			<p>Now Playing: {nowPlaying}</p>
			<p>
				{formatSeconds(currentPosition)} / {formatSeconds(totalDuration)}
			</p>
		</div>
	);
};
export default Player;
