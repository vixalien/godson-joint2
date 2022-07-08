import { useState } from "react";
import cn from "classnames";

import { Instagram, Mail, Youtube } from "~/icons/social";
import { Menu } from "~/icons/menu";

export default function Header() {
	const [open, setOpen] = useState(false);
	const toggle = () => setOpen(!open);

	return (
		<>
			<div className={cn(["header", { "menu-opened": open }])}>
				<div className="burger-container" onClick={toggle}>
					<div id="burger">
						<div className="bar topBar"></div>
						<div className="bar btmBar"></div>
					</div>
				</div>
				<div className="icon icon-apple"></div>
				<ul className="menu">
					<li className="menu-item"><a href="#">Mac</a></li>
					<li className="menu-item"><a href="#">iPad</a></li>
					<li className="menu-item"><a href="#">iPhone</a></li>
					<li className="menu-item"><a href="#">Watch</a></li>
					<li className="menu-item"><a href="#">TV</a></li>
					<li className="menu-item"><a href="#">Music</a></li>
					<li className="menu-item"><a href="#">Support</a></li>
				</ul>
			</div>
			<div className="header-spacer" />
		</>
	);
}
