import { LinkIcon } from "@sanity/icons"
import { normalDecorator, listDecorator, linkDecorator, languageDecorator } from "../../components/portableText"
import { supportedLanguages } from "../../lib/languages"

export default {
	name: "portableText",
	type: "array",
	title: "Portable Text",
	of: [
		{
			type: "block",
			styles: supportedLanguages.map(lang => ({
				title: lang.title,
				value: lang.value == "en" ? "normal" : lang.value,
				component: lang.value == "en" ? normalDecorator : languageDecorator,
			})).concat(supportedLanguages.map(lang => ({
				title: lang.title + " (switched)",
				value: lang.value + "Switched",
				component: languageDecorator,
			}))),
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