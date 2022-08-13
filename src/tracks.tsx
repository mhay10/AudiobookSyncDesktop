const Tracks = () => {
	return (
		<div>
			<button id="update">Update Tracks</button>
			<br />
			<select id="books">
				<option value="default" selected>
					-- Select Audiobook --
				</option>
			</select>
			<table id="tracks">
				<thead>
					<th>Track</th>
					<th>Current Position</th>
				</thead>
				<tbody id="tracklist"></tbody>
			</table>
		</div>
	);
};
export default Tracks;
