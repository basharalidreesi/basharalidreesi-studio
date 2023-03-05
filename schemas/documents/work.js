import { defaultLanguages, supportedLanguages } from "../../lib/supportedLanguages"
import { DocumentTextIcon } from "@sanity/icons"

export default {
	name: "work",
	type: "document",
	title: "Work",
	icon: DocumentTextIcon,
	fields: [
		{
			name: "locale",
			type: "array",
			title: "Locale(s)",
			description: "The locale(s) of this entry.",
			of: [{ type: "string" }],
			options: {
				list: [...supportedLanguages],
			},
			initialValue: defaultLanguages,
			validation: Rule => Rule.required().min(1).error("A minimum of one locale should be selected."),
		},
		{
			name: "displayLocale",
			type: "string",
			title: "Display Locale",
			description: "Display locale for Sanity Studio.",
			options: {
				list: [...supportedLanguages],
				layout: "radio",
			},
		},
		{
			name: "translation",
			type: "object",
			title: "Translation(s)",
			description: "Other entries that expand on this one's locales.",
			fields: supportedLanguages.map(lang => ({
				title: lang.title,
				type: "reference",
				name: lang.value,
				to: [{ type: "work" }],
				options: {
					disableNew: true,
					filter: "$value in locale",
					filterParams: { value: lang.value },
				},
				hidden: ({ document }) => document?.locale?.includes(lang.value),
			})),
			options: {
				collapsed: true,
				collapsible: true,
			},
		},
		{
			name: "title",
			type: "localisedString",
			title: "Title(s)",
			description: "The title(s) of this entry.",
		},
		{
			name: "address",
			type: "slug",
			title: "Address",
			description: "The address (slug) of this entry.",
			validation: Rule => [
				Rule.required().warning("This entry will not be published if an address is not specified."),
				Rule.custom((value) => {
					const regexExp = /^[a-z0-9]+(?:-[a-z0-9]+)*$/g
					return regexExp.test(value?.current) ? true : "Invalid slug."
				}),
			],
		},
		{
			name: "type",
			type: "reference",
			title: "Type",
			description: "The type of this entry.",
			to: [{ type: "workType" }],
		},
		{
			name: "year",
			type: "number",
			title: "Year",
			description: "The date (year) of this entry.",
		},
		{
			name: "image",
			type: "image",
			title: "Image",
			description: "The image that illustrates this entry.",
			options: {
				metadata: [
					"lqip",
				],
				storeOriginalFilename: false,
			},
			fields: [
				{
					name: "isExposed",
					type: "boolean",
					title: "Exposed?",
					description: "Controls whether this image should be displayed within the catalogue.",
					initialValue: false,
					hidden: ({ document }) => document?.image?.asset ? false : true,
				},
				{
					name: "width",
					type: "number",
					title: "Width",
					description: "The % width of this image when exposed within the catalogue. The default width is 37.5%.",
					hidden: ({ document }) => document?.image?.asset && document?.image?.isExposed ? false : true,
				},
				{
					name: "Caption",
					type: "portableText",
					title: "Caption",
					description: "The caption of this image.",
					hidden: ({ document }) => document?.image?.asset ? false : true,
				},
			],
		},
	],
	preview: {
		select: {
			displayLocale: "displayLocale",
			title: "title",
			type: "type.title",
			year: "year",
			locale: "locale",
			translation: "translation",
			image: "image",
		},
		prepare(selection) {
			const { displayLocale, title = [], type = [], year, locale, translation = [], image } = selection
			return {
				title: title[displayLocale] ? title[displayLocale] : null,
				subtitle: `
					${type[displayLocale] ? type[displayLocale] : "No type"},
					${year ? year : "no year"}
					(${locale ? locale.join(", ") : "no locales"}, ${Object.values(translation) ? Object.values(translation).length : "0"}⛓)
				`,
				media: image ? image : DocumentTextIcon,
			}
		},
	},
}