import { useState } from "react";
import cn from "classnames";

import { Instagram, Mail, Youtube } from "~/icons/social";
import { Menu } from "~/icons/menu";

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <>
      <nav className={cn({ open })}>
        <div className="header">
        <div className="menu invisible">
            <Menu />
          </div>
          <img className="banner vertical" src="/images/banner.webp" />
          <img
            className="banner horizontal"
            src="/images/banner-horizontal.webp"
          />
          <div className="menu" onClick={toggle}>
            <Menu />
          </div>
        </div>
        <div className="content">
          <ul className="nav">
            <li>
              <a href="/portfolio">Portfolio</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
          <ul className="links">
            <li>
              <a href="https://instagram.com/godsonjoint">
                <Instagram />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCKEry4n_ics0nQD8j1i2IgQ">
                <Youtube />
              </a>
            </li>
            <li>
              <a href="mailto:godsonjoint@gmail.com">
                <Mail />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
