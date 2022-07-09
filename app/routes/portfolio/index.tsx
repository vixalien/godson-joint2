import { MetaFunction } from "@remix-run/node";

import { staticMedia } from "~/lib/media";

import { MediaCard, Grid } from "~/components/grid";

const reversed = staticMedia.reverse();

export const meta: MetaFunction = () => {
  return {
    title: "Portfolio - Godson Joint"
  }
}

const Portfolio = () => {
  return (<div>
    <h1>Portfolio</h1>
    <Grid items={reversed.map((media, index) => {
      return <MediaCard media={media} className={index===0?"latest-work":undefined}/>
    })}/>
  </div>)
}

export default Portfolio;
