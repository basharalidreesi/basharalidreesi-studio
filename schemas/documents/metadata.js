export default {
	name: "metadata",
	type: "document",
	title: "Metadata",
	fields: [
		{
			name: "title",
			type: "string",
			title: "Title",
			description: "The title of this website.",
		},
		{
			name: "description",
			type: "text",
			title: "Description",
			description: "The main description of this website.",
		},
		{
			name: "url",
			type: "url",
			title: "URL",
			description: "The scheme, subdomain, second-level domain, and top-level domain of this website.",
		},
		{
			name: "baseUrl",
			type: "string",
			title: "Base URL",
			description: "The subdirectory of this website. The base URL Must begin with a forward slash, and mustn't end with a trailing one.",
		},
	],
	preview: {
		prepare() {
			return {
				title: "Metadata"
			}
		},
	},
}