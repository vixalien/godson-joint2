import { Media, CategoryMap } from "~/lib/media"

export const MediaCard = ({ media }: { media: Media }) => {
  const src = media.media_type === "image" ?
    media.src || `/data/images/${media.id}.${media.ext || "jpg"}` :
    `/data/thumbnails/${media.id}.png`;
  return <div className="card">
    <div className="thumbnail">
      <img src={src}/>
    </div>
    <div className="title">
      {media.name} - {CategoryMap.get(media.category || "Art")}
    </div>
  </div>
}

interface GridProps {
  items: any[]
}

const Grid = ({ items }: GridProps) => {
  return <div className="grid"></div>
}
