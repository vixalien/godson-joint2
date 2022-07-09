import { LinksFunction, MetaFunction } from "@remix-run/node";

import { staticMedia } from "~/lib/media";

import { Grid, MediaCard } from "~/components/grid";
import Font from "~/components/font";
import Button from "~/components/button";

export const meta: MetaFunction = () => {
  return {
    title: "Portfolio - Godson Joint",
    description: "See artworks made at Godson Joint"
  };
};

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: "/css/pages/portfolio.css",
    },
  ];
};

export const handle = {
  suffix: (
    <>
      <Font />
    </>
  ),
};

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <h2>See some of our exclusive creations.</h2>
      <Grid
        items={staticMedia.map((media, index) => {
          return (
            <MediaCard
              key={media.id}
              media={media}
              className={index === 0 ? "latest-work" : undefined}
            />
          );
        })}
      />
      <div className="footer">
        <p>
          Are you interested in a bespoke animation or artwork?
        </p>
        <p>
          <Button href="/contact">
            Contact Us
          </Button>
        </p>
      </div>
    </div>
  );
};

export default Portfolio;
