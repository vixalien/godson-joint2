import { LinksFunction } from "@remix-run/node";
import Button from "~/components/button";

import { staticMedia } from "~/lib/media";
import { MediaCard } from "~/components/grid";
import Font from "~/components/font";

export const links: LinksFunction = () => {
	return [
		{ rel: "stylesheet", href: "/css/pages/home.css" },
	];
};

export const handle = {
	suffix: (
		<>
			<Font/>
		</>
	),
};

const Welcome = () => {
	return (
		<div className="welcome">
			<h1>
				<div>Ni</div>
				<div className="accented">Karibu</div>
				<div>Client!</div>
			</h1>
			<p className="text">
				We animate everything you want
			</p>
			<p>
				<Button className="main" href="/portfolio">Portfolio</Button>
				<Button className="alt" href="/contact">Contact Us</Button>
			</p>
		</div>
	);
};

const LatestWork = () => {
	return (
		<div className="latest-work">
			<h2>Latest Work</h2>
			<MediaCard media={staticMedia[staticMedia.length - 1]} />
		</div>
	);
};

export default function Index() {
	return (
		<>
			<Welcome />
			<LatestWork />
		</>
	);
}
