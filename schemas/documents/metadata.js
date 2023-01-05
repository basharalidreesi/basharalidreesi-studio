export default {
	name: "metadata",
	type: "document",
	title: "Metadata",
	fields: [
		{
			name: "title",
			type: "string",
			title: "Title",
			initialValue: "Metadata",
			hidden: true,
		},
		{
			name: "siteTitle",
			type: "string",
			title: "Title",
		},
		{
			name: "siteDescription",
			type: "text",
			title: "Description",
		},
	],
}