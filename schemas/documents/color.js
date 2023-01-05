export default {
	name: "color",
	type: "document",
	title: "Colours",
	fields: [
		{
			name: "title",
			type: "string",
			title: "Title",
			initialValue: "Colours",
			hidden: true,
		},
		{
			name: "backgroundColor",
			type: "string",
			title: "Background Colour",
		},
		{
			name: "textColor",
			type: "string",
			title: "Text Colour",
		},
	],
}