import { useState } from "react";
import cn from "classnames";

import { Instagram, Mail, Youtube } from "~/icons/social";
import { Link } from "@remix-run/react";

export default function Header() {
	const [open, setOpen] = useState(false);
	const toggle = () => setOpen(!open);

	return (
		<>
			<div className={cn(["header", { "menu-opened": open }])}>
				<nav className="nav">
					<div className="burger-container" onClick={toggle}>
						<div id="burger">
							<div className="bar topBar"></div>
							<div className="bar btmBar"></div>
						</div>
					</div>
					<Link className="icon title" to={"/"} onClick={() => setOpen(false)}>
						<img className="horizontal" src="/images/banner.webp" />
						<img className="vertical" src="/images/banner-vertical.webp" />
					</Link>
					<div className="menu-alignment"></div>
				</nav>
				<ul className="menu links">
					<li className="menu-item">
						<a href="/portfolio">Portfolio</a>
					</li>
					<li className="menu-item">
						<a href="/about">About</a>
					</li>
					<li className="menu-item">
						<a href="/contact">Contact</a>
					</li>
				</ul>
				<ul className="menu icons">
					<li className="menu-item">
						<a href="https://instagram.com/godsonjoint" target="_blank">
							<Instagram />
						</a>
					</li>
					<li className="menu-item">
						<a
							href="https://www.youtube.com/channel/UCKEry4n_ics0nQD8j1i2IgQ"
							target="_blank"
						>
							<Youtube />
						</a>
					</li>
					<li className="menu-item">
						<a href="mailto:godsonjoint@gmail.com" target="_blank">
							<Mail />
						</a>
					</li>
				</ul>
			</div>
			<div className="header-spacer" />
		</>
	);
}
