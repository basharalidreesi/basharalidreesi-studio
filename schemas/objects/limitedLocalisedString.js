import { defaultLanguages, supportedLanguages } from "../../lib/supportedLanguages"
import { rtlInput } from "../../components/rtlInput"

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