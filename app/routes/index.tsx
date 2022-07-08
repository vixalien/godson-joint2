import { LinksFunction } from "@remix-run/node";
import Header from "~/components/header";
import Button from "~/components/button";

export const links: LinksFunction = () => {
	return [
		{ rel: "stylesheet", href: "/css/pages/home.css" }
	]
}

const HomeScreen = () => {
	return <div className="welcome">
		<h1>
			<div>Ni</div>
			<div className="accented">Karibu</div>
			<div>Client!</div>
		</h1>
		<p className="text">
			We do everything you want
		</p>
		<p>
			<Button className="main" href="/portfolio">Portfolio</Button>
			<Button className="alt" href="/contact">Contact Us</Button>
		</p>
	</div>
}

export default function Index() {
	return (
		<>
			<Header />
			<main>
				<HomeScreen />
			</main>
		</>
	);
}
