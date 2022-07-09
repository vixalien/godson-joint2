import { LinksFunction, LoaderFunction, MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import { CategoryMap, getImageURL, getMediaTitle, getVideoURL, Media, MediaTypeMap, staticMedia } from "~/lib/media";

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
			<div className="media">
				{media.media_type === "image" ? <div className="image">
					<img src={getImageURL(media)} width={media.meta?.width} height={media.meta?.height} />
				</div> : (
					<>
						<Video media={media} />
					</>
				)}
			</div>
			{media.description ? <p className="description">
				{media.description}
			</p> : null}
			<Keymap
				title="Info"
				object={{
					"Client": media.client,
					"Category": CategoryMap.get(media.category) || "Other",
					"Media Type": MediaTypeMap.get(media.media_type)
				}} />
			<Keymap
				title="Credits"
				object={media.credits}
			/>
		</>
	);
}

const Video = ({ media }: { media: Media }) => {
	return (
		<div className="video">
			<video controls width={media.meta?.width} height={media.meta?.height}>
				<source src={getVideoURL(media)} type="video/mp4" />
			</video>
		</div>
	);
};

const Keymap = (
	{ title, object, className }: { object: Record<string, any>; className?: string, title?: string },
) => {
	const entries = Object.entries(object || {});
	if (entries.length === 0) return null;
	return (
		<>
			{title ? <h3>{title}</h3> : null}
			<ul className={className}>
				{entries.map(([key, value]) => {
					return (
						<li key={key}>
							<b>{key}:</b> <span>{value}</span>
						</li>
					);
				})}
			</ul>
		</>
	);
};
