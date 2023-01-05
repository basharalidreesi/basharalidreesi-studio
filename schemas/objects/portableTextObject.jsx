import { BlockContentIcon } from "@sanity/icons"

export default {
	name: "portableTextObject",
	type: "object",
	title: "Text",
	icon: BlockContentIcon,
	fields: [
		{
			name: "text",
			type: "portableText",
			title: "Text",
			description: "The text input of this text block.",
		},
	],
	preview: {
		select: {
			text: "text",
		},
		prepare(selection) {
			const text = (selection.text || []).find(block => block._type === "block")
			return {
				title: text ? text.children.filter(child => child._type === "span").map(span => span.text).join("") : "",
				subtitle: text ? "Text" : "⚠ Empty",
				media: BlockContentIcon,
			}
		}
	},
}