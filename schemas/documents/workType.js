import { TagIcon } from "@sanity/icons"

export default {
	name: "workType",
	type: "document",
	title: "Type",
	icon: TagIcon,
	fields: [
		{
			name: "title",
			type: "localisedString",
			title: "Title(s)",
			description: "The title(s) of this catalogue entry type.",
		},
	],
	preview: {
		select: {
			title: "title",
		},
		prepare(selection) {
			const { title } = selection
			delete title._type
			return {
				title: Object.values(title).join(" / "),
				media: TagIcon,
			}
		}
	},
}