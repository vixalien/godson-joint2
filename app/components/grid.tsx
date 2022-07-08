import { Media, CategoryMap, getImageURL } from "~/lib/media"
import { Play } from "~/icons/media";
import { Link } from "react-router-dom";
import classNames from "classnames";

export const MediaCard = ({ media }: { media: Media }) => {
  return <div className="card">
    <Link className="thumbnail" to={`/portfolio/${media.id}`}>
      <img className="image" src={getImageURL(media)} />
      <div className={classNames("play-icon", { visible: media.media_type === "video" })}>
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
