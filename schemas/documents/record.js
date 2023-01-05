// import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list"

export default {
	name: "record",
	type: "document",
	title: "Record",
	fields: [
		// orderRankField({ type: "record" }),
		{
			name: "recordType",
			type: "string",
			title: "Type",
			description: "The manner in which this Record is to be displayed.",
			initialValue: "card",
			options: {
				list: [
					{
						title: "Card",
						value: "card",
					},
					{
						title: "Image",
						value: "image",
					},
				],
				layout: "radio",
			},
		},
		{
			name: "recordOf",
			type: "string",
			title: "Link",
			description: "What does this Record link to?",
			initialValue: "nothing",
			options: {
				list: [
					{
						title: "Nothing",
						value: "nothing",
					},
					{
						title: "External Link",
						value: "externalLink",
					},
					{
						title: "Internal Entry",
						value: "internalEntry",
					},
				],
				layout: "radio",
			},
		},
		{
			name: "recordExternalLink",
			type: "url",
			title: "Link",
			description: "The external link to which this Record leads.",
			hidden: ({document}) => document?.recordOf != "externalLink"
		},
		{
			name: "recordExternalLinkTitle",
			type: "string",
			title: "Title",
			description: "The title of the external link to which this Record leads.",
			hidden: ({document}) => document?.recordOf != "externalLink"
		},
		{
			name: "recordInternalEntry",
			type: "reference",
			title: "Link",
			description: "The internal entry to which this Record links.",
			to: [
				{
					type: "entry",
				},
			],
			options: {
				disableNew: true,
			},
			hidden: ({document}) => document?.recordOf != "internalEntry"
		},
		{
			name: "recordCard",
			type: "array",
			title: "Card",
			description: "The contents of the card that represents this Record.",
			of: [
				{
					type: "string",
				},
			],
			hidden: ({document}) => document?.recordType != "card"
		},
		{
			name: "recordImage",
			type: "image",
			title: "Image",
			description: "The image that represents this Record.",
			options: {
				hotspot: true,
				storeOriginalFilename: false,
				metadata: [
					"lqip",
				],
			},
			fields: [
				{
					name: "recordImageCaption",
					type: "string",
					title: "Caption",
					description: "The caption of the image that represents this Record.",
				},
			],
			hidden: ({document}) => document?.recordType != "image"
		},
	],
	// orderings: [orderRankOrdering],
	preview: {
		select: {
			of: "recordOf",
			type: "recordType",
			externalTitle: "recordExternalLinkTitle",
			internalTitle: "recordInternalEntry.entryTitle",
			externalLink: "recordExternalLink",
			internalSlug: "recordInternalEntry.entrySlug.current",
			media: "recordImage",
			mediaCaption: "recordImage.recordImageCaption",
		},
		prepare(selection) {
			const {
				of,
				type,
				internalTitle = "Untitled",
				externalTitle = "Untitled",
				externalLink = "⚠ Unspecified external link",
				internalSlug = "⚠ Unspecified internal link",
				media,
				mediaCaption,
			} = selection
			if (of === "externalLink") {
				return {
					title: externalTitle,
					subtitle: externalLink,
					media: media,
				}
			}
			if (of === "internalEntry") {
				return {
					title: internalTitle,
					subtitle: internalSlug,
					media: media,
				}
			}
			if (of === "nothing") {
				if (type === "image" && mediaCaption) {
					return {
						title: mediaCaption,
						media: media,
					}
				}
				if (type === "card") {}
			}
			return {
				title: "Untitled",
				media: media,
			}
		},
	},
}