type Category =
	| "cover_art"
	| "visualizer"
	| "teaser"
	| "lyric-video"
	| "2d"
	| "other";

export const CategoryMap = new Map<Category, string>([
	["cover_art", "Cover Art"],
	["visualizer", "Visualizer"],
	["teaser", "Teaser"],
	["lyric-video", "Lyric Video"],
	["2d", "2D Short Film"],
	["other", "Other Art"],
]);

type MediaType = "video" | "image";

export const MediaTypeMap = new Map<MediaType, string>([
	["image", "Image"],
	["video", "Video"]
])

interface MediaMetadata {
	width: number;
	height: number;
	ext: string;
	src: string;
}

export interface Media {
	id: string;
	name: string;
	client?: string;
	description?: string;
	media_type: MediaType;
	credits: Record<string, string>;
	category: Category;
	meta?: Partial<MediaMetadata>;
}

const BaseCredits = {
	"Art Director": "Mr. Bakame",
};

export const staticMedia: Media[] = [
	{
		id: "afro-killa",
		name: "Afro Killa",
		client: "Yannick MYK",
		media_type: "image",
		credits: BaseCredits,
		category: "cover_art",
		meta: {
			width: 1080,
			height: 1080,
		}
	},
	{
		id: "ibintu-bijegajega",
		name: "Ibintu Bijegajega",
		client: "Loco del Coco",
		media_type: "image",
		credits: BaseCredits,
		category: "cover_art",
		meta: {
			width: 1000,
			height: 1000,
		}
	},
	{
		id: "princess",
		name: "Princess",
		client: "Uplow",
		media_type: "image",
		credits: BaseCredits,
		category: "cover_art",
		meta: {
			width: 1080,
			height: 1080,
		}
	},
	{
		id: "celebrate",
		name: "Celebrate",
		client: "Getts Kent",
		media_type: "video",
		credits: BaseCredits,
		category: "visualizer",
		meta: {
			width: 1920,
			height: 1080,
		}
	},
	{
		id: "hide-yo-wallet",
		name: "Hide yo Wallet",
		client: "Getts Kent",
		media_type: "video",
		credits: BaseCredits,
		category: "teaser",
		meta: {
			width: 640,
			height: 640,
		}
	},
	{
		id: "isekulumein",
		name: "Isekulumein",
		client: "Yannick MYK",
		media_type: "video",
		credits: {
			"Director": "Mr Bakame",
		},
		category: "visualizer",
		meta: {
			width: 1280,
			height: 720,
		}
	},
	{
		id: "bakame",
		name: "Bakame n'Impyisi",
		client: "Godson Joint",
		media_type: "video",
		description: "A friend turns into a foe in this modernized folk tale.",
		credits: {
			"Director": "Mr Bakame",
			"Animator": "Iradukunda Yves",
			"Voice over": "Yannick MYK",
		},
		category: "2d",
		meta: {
			width: 640,
			height: 352,
		}
	},
];

export const getImageURL = (media: Media) => {
	return media.media_type === "image"
		? media.meta?.src || `/data/images/${media.id}.${media.meta?.ext || "jpg"}`
		: `/data/thumbnails/${media.id}.png`;
};

export const getMediaTitle = (media: Media) => {
	return `${media.name} - ${CategoryMap.get(media.category)}`;
}

export const getVideoURL = (media: Media) => {
	return media.meta?.src || `/data/videos/${media.id}.${media.meta?.ext || "mp4"}`;
};
