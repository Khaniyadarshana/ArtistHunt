import React from "react";

function Home() {
	const link = "https://github.com/Khaniyadarshana";
	const target = "_blank";

	return (
		<div className="container">
			<h1>MERN Stack ArtistHunt App</h1>
			<p>
				<b>Front-end</b>: React.js v17+ with RRDv6+
			</p>
			<p>
				<b>Back-end</b>: Node.js, Express.js
			</p>
			<p>
				<b>Database</b>: MongoDB Atlas
			</p>
			<p>
				<b>Developed By</b>: Darshana Khaniya
				<p>
					<a href={link} target={target}>
					Darshana Khaniya
					</a>
				</p>
			</p>
		</div>
	);
}

export default Home;
