import { BookIcon, InfoOutlineIcon, StarIcon } from "@sanity/icons"

export default {
	name: "homepage",
	type: "document",
	title: "Homepage",
	fields: [
		{
			name: "content",
			type: "array",
			title: "Content",
			description: "The content blocks that comprise this website's homepage.",
			of: [
				{
					name: "infoBlock",
					type: "object",
					title: "Info",
					icon: InfoOutlineIcon,
					fields: [
						{
							name: "title",
							type: "limitedLocalisedString",
							title: "Title",
							description: "The title of this content block.",
						},
						{
							name: "text",
							type: "portableText",
							title: "Text",
							description: "The info presented within this content block.",
						},
					],
					preview: {
						select: {
							title: "title.en",
						},
						prepare(selection) {
							const { title } = selection
							return {
								title: title,
								media: InfoOutlineIcon,
							}
						},
					},
				},
				{
					name: "catalogueBlock",
					type: "object",
					title: "Catalogue",
					icon: BookIcon,
					fields: [
						{
							name: "title",
							type: "limitedLocalisedString",
							title: "Title",
							description: "The title of this content block.",
						},
						{
							name: "notice",
							type: "message",
							title: "Notice",
							description: "Automatic content block. No input required!",
						},
					],
					preview: {
						select: {
							title: "title.en",
						},
						prepare(selection) {
							const { title } = selection
							return {
								title: title,
								media: BookIcon,
							}
						},
					},
				},
				{
					name: "featuredBlock",
					type: "object",
					title: "Featured Works",
					icon: StarIcon,
					fields: [
						{
							name: "title",
							type: "limitedLocalisedString",
							title: "Title",
							description: "The title of this content block.",
						},
						{
							name: "selection",
							type: "array",
							title: "Selection",
							description: "The works selected for featuring within this content block.",
							of: [
								{
									type: "reference",
									to: [{ type: "work" }],
									options: {
										disableNew: true,
										filter: "defined(image.asset)",
									},
								},
							],
						},
					],
					preview: {
						select: {
							title: "title.en",
						},
						prepare(selection) {
							const { title } = selection
							return {
								title: title,
								media: StarIcon,
							}
						},
					},
				},
			],
		},
	],
	preview: {
		prepare() {
			return {
				title: "Home",
			}
		},
	},
}