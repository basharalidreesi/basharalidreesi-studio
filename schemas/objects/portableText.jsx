import { LeaveIcon, LinkIcon, StrikethroughIcon } from "@sanity/icons"

export default {
	name: "portableText",
	type: "array",
	title: "Portable Text",
	of: [
		{
			type: "block",
			marks: {
				decorators: [
					{
						title: "Strong",
						value: "strong",
					},
					{
						title: "Emphasis",
						value: "em",
					},
					{
						title: "Strikethrough",
						value: "s",
						icon: StrikethroughIcon,
						component: ({ children }) => <s>{ children }</s>,
					},
				],
			},
		},
	],
}