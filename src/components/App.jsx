import React from "react";
import Header from "./Header";
import TicketList from "./TicketList";
import NewTicketControl from "./NewTicketControl";
import Queue from "./Queue";

function App() {
	return (
		<div>
			<Header />
			<TicketList />
			<NewTicketControl />
			<Queue />
		</div>
	);
}

export default App;