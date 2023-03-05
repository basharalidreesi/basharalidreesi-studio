import { noInput } from "../../components/noInput"

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