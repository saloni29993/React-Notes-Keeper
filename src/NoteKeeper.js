import React, { Component } from "react";

class NoteKeeper extends Component {
	render() {
		return(
			<div className="noteKeeperContainer">
				<div className="header">
					<form>
						<input placeholder="enter task">
						</input>
						<button type="submit">Add</button>
					</form>
				</div>
			</div>
		);
	}
}

export default NoteKeeper;