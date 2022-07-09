import { useState } from "react";
import { Link } from "@remix-run/react";
import cn from "classnames";

import { Instagram, Mail, Youtube } from "~/icons/social";

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
          <Link className="icon title" to={"/"} onClick={() => setOpen(false)} aria-label="Go to Godson Joint's homepage">
            <img className="horizontal" src="/images/banner.webp" alt="Godson Joint Logo" />
            <img className="vertical" src="/images/banner-vertical.webp" alt="Horizontal Godson Joint Logo" />
          </Link>
          <div className="menu-alignment"></div>
        </nav>
        <ul className="menu links">
          <li className="menu-item">
            <Link to="/portfolio" onClick={() => setOpen(false)}>
              Portfolio
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          </li>
          <li className="menu-item">
            <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
          </li>
        </ul>
        <ul className="menu icons">
          <li className="menu-item">
            <a href="https://instagram.com/godsonjoint" target="_blank" aria-label="Godson Joint's Instagram">
              <Instagram />
            </a>
          </li>
          <li className="menu-item">
            <a
              href="https://www.youtube.com/channel/UCKEry4n_ics0nQD8j1i2IgQ"
              target="_blank"
							aria-label="Godson Joint's Youtube"
            >
              <Youtube />
            </a>
          </li>
          <li className="menu-item">
            <a href="mailto:godsonjoint@gmail.com" target="_blank" aria-label="Email Godson Joint">
              <Mail />
            </a>
          </li>
        </ul>
      </div>
      <div className="header-spacer" />
    </>
  );
}
