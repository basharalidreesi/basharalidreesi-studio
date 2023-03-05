export default {
	name: "colours",
	type: "document",
	title: "Colours",
	fields: [
		{
			name: "textColour",
			type: "object",
			title: "Text Colour",
			description: "The hex code for this website's text colour.",
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
			description: "The hex code for this website's background colour.",
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
	preview: {
		prepare() {
			return {
				title: "Colours"
			}
		},
	},
}