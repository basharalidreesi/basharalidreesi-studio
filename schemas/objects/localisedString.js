import { supportedLanguages } from "../../lib/supportedLanguages"
import { rtlInput } from "../../components/rtlInput"

export default {
	name: "localisedString",
	type: "object",
	title: "Localised String",
	fields: supportedLanguages.map(lang => ({
		title: lang.title,
		type: "string",
		name: lang.value,
		components: {
			input: lang.dir == "rtl" ? rtlInput : null,
		},
		hidden: ({ document }) => document?._type === "work" ? !document?.locale?.includes(lang.value) : false,
	})),
}