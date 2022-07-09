import { LinksFunction, LoaderFunction, MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import { CategoryMap, getImageURL, Media, staticMedia } from "~/lib/media";

export const loader: LoaderFunction = ({ params }) => {
	const id = params.mediaId;
	const media = staticMedia.find((m) => m.id === id);
	if (!media) {
		throw new Response("No Media Found", {
			status: 404,
		});
	}
	return media;
};

export const links: LinksFunction = () => {
	return [{
		rel: "stylesheet",
		href: "/css/pages/portfolio-item.css",
	}];
};

export const meta: MetaFunction = ({ data }: { data: Media }) => {
	const title = getMediaTitle(data);
	const image = getImageURL(data);
	return {
		title: getMediaTitle(data),
		description: data.description,
		"og:title": title,
		"og:description": data.description,
		"og:image": image,
		"twitter:title": title,
		"twitter:description": data.description,
		"twitter:image": image,
		"twitter:card": image ? "summary_large_image" : undefined,
	}
}

export default function Invoice() {
	const media = useLoaderData<Media>();

	return (
		<>
			<Link className="portfolio-link" to="/portfolio">&larr; Portfolio</Link>
			<h1>{getMediaTitle(media)}</h1>
			{media.media_type === "image" ? <img src={getImageURL(media)} /> : (
				<>
					<Video media={media} />
				</>
			)}
			<p className="metadata">
				{media.description}
			</p>
			<div className="credits">
				<h3>Credits</h3>
				<Keymap object={media.credits} />
			</div>
		</>
	);
}

const getMediaTitle = (media: Media) => {
	return `${media.name} - ${CategoryMap.get(media.category)}`;
}

const getVideoURL = (media: Media) => {
	return media.src || `/data/videos/${media.id}.${media.ext || "mp4"}`;
};

const Video = ({ media }: { media: Media }) => {
	// this is a custom component that renders a video and controls
	// it's playback.
	return (
		<div className="video">
			<video controls>
				<source src={getVideoURL(media)} type="video/mp4" />
			</video>
		</div>
	);
};

const Keymap = (
	{ object, className }: { object: Record<string, any>; className?: string },
) => {
	return (
		<ul className={className}>
			{Object.entries(object || {}).map(([key, value]) => {
				return (
					<li key={key}>
						<b>{key}:</b> <span>{value}</span>
					</li>
				);
			})}
		</ul>
	);
};
