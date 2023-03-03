export default {
	name: "colours",
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
			name: "textColour",
			type: "object",
			title: "Text Colour",
			fields: [
				{
					name: "light",
					type: "string",
					title: "Light",
				},
				{
					name: "dark",
					type: "string",
					title: "Dark",
				},
			],
		},
		{
			name: "backgroundColour",
			type: "object",
			title: "Background Colour",
			fields: [
				{
					name: "light",
					type: "string",
					title: "Light",
				},
				{
					name: "dark",
					type: "string",
					title: "Dark",
				},
			],
		},
	],
}