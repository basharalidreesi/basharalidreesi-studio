import { NumberIcon } from "@sanity/icons"
import { defineArrayMember, defineField } from "sanity"

export default defineField({
	name: "portableText",
	type: "array",
	title: "Portable Text",
	of: [
		defineArrayMember({
			type: "block",
			styles: [
				{
					title: "Body",
					value: "normal",
				},
				{
					title: "Subheading",
					value: "h5",
				},
				{
					title: "Quote",
					value: "blockquote",
				}
			],
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
				],
				annotations: [
					defineField({
						name: "footnote",
						type: "object",
						title: "Footnote",
						icon: NumberIcon,
						fields: [
							defineField({
								name: "text",
								type: "text",
								title: "Text",
								description: "",
								rows: 4,
							}),
						],
					}),
				],
			},
			lists: [
				{
					title: "Bulleted List",
					value: "bullet",
				},
				{
					title: "Numbered List",
					value: "number",
				},
			],
		}),
	],
})