import { noInput } from "../../components/input"

export default {
	name: "message",
	type: "object",
	title: "Message",
	fields: [
		{
			name: "title",
			type: "string",
			title: "Title",
			components: {
				field: noInput,
			},
		},
	],
}