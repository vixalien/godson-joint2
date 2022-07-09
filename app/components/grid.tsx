import { CategoryMap, getImageURL, Media } from "~/lib/media";
import { Play } from "~/icons/media";
import { Link } from "react-router-dom";
import cn from "classnames";

export const MediaCard = ({ media, className }: { media: Media, className?: string }) => {
	return (
		<div className={cn("card", className)}>
			<Link className={cn("thumbnail", { video: media.media_type === "video" })} to={`/portfolio/${media.id}`}>
				<img className="image" src={getImageURL(media)} />
				<div
					className="play-icon"
				>
					<Play />
				</div>
			</Link>
			<div className="title">
				{media.name} - {CategoryMap.get(media.category || "Art")}
			</div>
		</div>
	);
};

interface GridProps {
	items: any[];
}

export const Grid = ({ items }: GridProps) => {
	return <div className="grid">
    {items}
  </div>;
};
