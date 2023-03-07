import { defaultLanguages, supportedLanguages } from "../../lib/languages"
import { rtlInput } from "../../components/input"

export default {
	name: "limitedLocalisedString",
	type: "object",
	title: "Limited Localised String",
	fields: supportedLanguages.filter(lang => defaultLanguages.includes(lang.value)).map(lang => ({
		title: lang.title,
		type: "string",
		name: lang.value,
		components: {
			input: lang.dir == "rtl" ? rtlInput : null,
		},
	})),
}