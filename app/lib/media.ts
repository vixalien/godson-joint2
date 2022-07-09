export const CategoryMap = new Map([
	["cover_art", "Cover Art"],
	["visualizer", "Visualizer"],
	["teaser", "Teaser"],
	["lyric-video", "Lyric Video"],
	["2d", "2D Short Film"],
	["other", "Other Art"],
]);

export interface Media {
	id: string;
	name: string;
	client?: string;
	description?: string;
	media_type: "video" | "image";
	credits: Record<string, string>;
	category:
		| "cover_art"
		| "visualizer"
		| "teaser"
		| "lyric-video"
		| "2d"
		| "other";
	src?: string;
	ext?: string;
}

export const a = "";

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
	},
	{
		id: "ibintu-bijegajega",
		name: "Ibintu Bijegajega",
		client: "Loco del Coco",
		media_type: "image",
		credits: BaseCredits,
		category: "cover_art",
	},
	{
		id: "princess",
		name: "Princess",
		client: "Uplow",
		media_type: "image",
		credits: BaseCredits,
		category: "cover_art",
	},
	{
		id: "celebrate",
		name: "Celebrate",
		client: "Getts Kent",
		media_type: "video",
		credits: BaseCredits,
		category: "visualizer",
	},
	{
		id: "hide-yo-wallet",
		name: "Hide yo Wallet",
		client: "Getts Kent",
		media_type: "video",
		credits: BaseCredits,
		category: "teaser",
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
	},
];

export const getImageURL = (media: Media) => {
	return media.media_type === "image"
		? media.src || `/data/images/${media.id}.${media.ext || "jpg"}`
		: `/data/thumbnails/${media.id}.png`;
};
