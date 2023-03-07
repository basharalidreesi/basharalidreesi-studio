import { DropIcon, LinkIcon } from "@sanity/icons"
import { isolationDecorator, leftAlignedDecorator, normalDecorator, rightAlignedDecorator, centreAlignedDecorator, listDecorator, linkDecorator, } from "../../components/portableText"

export default {
	name: "portableText",
	type: "array",
	title: "Portable Text",
	of: [
		{
			type: "block",
			styles: [
				{
					title: "Normal",
					value: "normal",
					component: normalDecorator,
				},
				{
					title: "Left-aligned",
					value: "leftAligned",
					component: leftAlignedDecorator,
				},
				{
					title: "Right-aligned",
					value: "rightAligned",
					component: rightAlignedDecorator,
				},
				{
					title: "Centred",
					value: "centreAligned",
					component: centreAlignedDecorator,
				},
			],
			lists: [
				{
					title: "Bullets",
					value: "bullet",
					component: listDecorator,
				},
				{
					title: "Numbers",
					value: "number",
					component: listDecorator,
				},
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
					{
						title: "Underline",
						value: "underline",
					},
					{
						title: "Strikethrough",
						value: "strike-through",
					},
					{
						title: "Isolation",
						value: "isolation",
						icon: DropIcon,
						component: isolationDecorator,
					},
				],
				annotations: [
					{
						name: "link",
						type: "object",
						title: "Link",
						icon: LinkIcon,
						fields: [
							{
								name: "url",
								type: "url",
								title: "URL",
								description: "Link to an external reference.",
								hidden: ({parent}) => parent?.reference ? true : false,
								validation: Rule => Rule.uri({
									scheme: ["http", "https", "mailto", "tel"]
								}).error("Not a valid URL."),
							},
							{
								name: "reference",
								type: "reference",
								title: "Reference",
								description: "Link to an internal reference.",
								to: [{ type: "work" }],
								options: {
									disableNew: true,
								},
								hidden: ({parent}) => parent?.url ? true : false,
							},
						],
						components: {
							annotation: linkDecorator,
						},
					},
				],
			},
		},
	],
}