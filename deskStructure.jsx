import { GearIcon, InfoIcon, NorthStarIcon, StackIcon, VersionsIcon } from "@primer/octicons-react"
// import {orderableDocumentListDeskItem} from "@sanity/orderable-document-list"

const hiddenDocumentTypes = listItem => ![
	"color",
	"entry",
	"metadata",
	"record",
].includes(listItem.getId())

export const deskStructure = (S, context) =>
	S.list()
		.title("Contents")
		.items([
			S.listItem()
				.title("Settings")
				.icon(GearIcon)
				.child(
					S.list()
						.title("Settings")
						.items([
							S.listItem()
								.title("Metadata")
								.icon(InfoIcon)
								.child(
									S.document()
										.schemaType("metadata")
										.documentId("metadata")
								),
							S.listItem()
								.title("Colours")
								.icon(NorthStarIcon)
								.child(
									S.document()
										.schemaType("color")
										.documentId("color")
								),
						])
				),
			S.divider(),
			S.listItem()
				.title("Entries")
				.icon(StackIcon)
				.child(
					S.documentTypeList("entry")
						.title("Entries")
				),
			// orderableDocumentListDeskItem({
			// 	type: "record",
			// 	title: "Records",
			// 	icon: VersionsIcon,
			// 	S,
			// 	context,
			// }),
			S.listItem()
				.title("Records")
				.icon(VersionsIcon)
				.child(
					S.documentTypeList("record")
						.title("Records")
				),
			...S.documentTypeListItems().filter(hiddenDocumentTypes)
		])