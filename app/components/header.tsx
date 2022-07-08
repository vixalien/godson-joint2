import { useState } from "react";
import cn from "classnames";

import { Instagram, Mail, Youtube } from "~/icons/social";
import { Menu } from "~/icons/menu";

function OldHeader() {
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


export default function Header() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <div className="window">
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
        <div className="shop icon icon-bag"></div>
      </div>
      <div className="content"> <img src="https://images.apple.com/v/ipad-air-2/c/images/overview/performance_large.png" alt="" />
        <h2>Thin. Light. Epic.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas recusandae ullam repellat, soluta, reprehenderit suscipit reiciendis minus ratione alias dolor eveniet rerum.</p><img src="https://images.apple.com/v/ipad-air-2/c/images/overview/design_large.png" alt="" />
        <p>Consectetur adipisicing elit. Est earum dicta officiis ratione qui non perspiciatis necessitatibus laborum culpa ad. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste explicabo laborum non vel, aperiam, nemo esse harum officiis, temporibus quae, delectus dolorem laboriosam eligendi exercitationem aliquam eveniet autem facilis? Iure pariatur iusto ipsum aut, accusantium rerum. Ipsum officiis voluptatibus assumenda placeat obcaecati. Voluptas explicabo optio repellendus minima sunt, ducimus suscipit, labore ratione eum officia molestias!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quidem magnam aut corporis voluptate! Et similique iste, molestiae illo nemo adipisci molestias, iure accusantium, sit expedita fugiat aliquam dolore! Odit perferendis, earum quaerat inventore ut error placeat sunt dignissimos dicta.</p>
      </div>
    </div>
  );
}
