import { ImageIcon } from "@sanity/icons"

export default {
	name: "imageObject",
	type: "object",
	title: "Image",
	icon: ImageIcon,
	fields: [
		{
			name: "image",
			type: "image",
			title: "Image",
			description: "The image input of this image block.",
			options: {
				hotspot: true,
				storeOriginalFilename: false,
				metadata: [
					"lqip",
				],
			},
		},
		{
			name: "caption",
			type: "portableText",
			title: "Caption",
			description: "The text input of this image block.",
		},
	],
	preview: {
		select: {
			image: "image.asset",
			caption: "caption",
		},
		prepare(selection) {
			const image = selection.image
			const caption = (selection.caption || []).find(block => block._type === "block")
			return {
				title: caption ? caption.children.filter(child => child._type === "span").map(span => span.text).join("") : "",
				subtitle: image ? caption ? "Image, captioned" : "Image, uncaptioned" : "⚠ Empty",
				media: image ? image : ImageIcon,
			}
		}
	},
}