import { Media, CategoryMap } from "~/lib/media"
import { Play } from "~/icons/media";
import { Link } from "react-router-dom";

export const MediaCard = ({ media }: { media: Media }) => {
  const src = media.media_type === "image" ?
    media.src || `/data/images/${media.id}.${media.ext || "jpg"}` :
    `/data/thumbnails/${media.id}.png`;
  return <div className="card">
    <Link className="thumbnail" to={`/portfolio/${media.id}`}>
      <img className="image" src={src} />
      <div className="play-icon">
        <Play />
      </div>
    </Link>
    <div className="title">
      {media.name} - {CategoryMap.get(media.category || "Art")}
    </div>
  </div>
}

interface GridProps {
  items: any[]
}

export const Grid = ({ items }: GridProps) => {
  return <div className="grid"></div>
}
