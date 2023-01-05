export default {
	name: "entry",
	type: "document",
	title: "Entry",
	fields: [
		{
			name: "entryTitle",
			type: "string",
			title: "Title",
			description: "The title of this Entry.",
		},
		{
			name: "entrySlug",
			type: "slug",
			title: "Slug",
			description: "The unique identifier linking to this Entry's dedicated page.",
			options: {
				source: "entryTitle",
				maxLength: 96,
			},
		},
		{
			name: "entryContent",
			type: "array",
			title: "Content",
			description: "The contents of this Entry.",
			of: [
				{
					type: "portableTextObject",
				},
				{
					type: "imageObject",
				},
			],
		},
	],
}