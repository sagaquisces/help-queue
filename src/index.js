function liveTime() {
	var heading = React.createElement('h1', {}, 'Help Queue');
	var ticketLocation = React.createElement('h3', {}, 'G3');
	var ticketNames = React.createElement('h3', {}, 'Devin and Devon');
	var ticketIssue = React.createElement('h3', {}, "Bootstrap won't fire up");
	var app = React.createElement('div', {}, heading, ticketLocation, ticketNames, ticketIssue);


	ReactDOM.render(
		app,
		document.getElementById('react-app-root')
	);
}

setInterval(liveTime, 1000);