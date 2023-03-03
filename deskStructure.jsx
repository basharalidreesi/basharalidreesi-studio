import { BookIcon, CogIcon, InfoOutlineIcon, LemonIcon, TagIcon } from "@sanity/icons"

const hiddenDocumentTypes = listItem => ![
	"colours",
	"metadata",
	"work",
	"workType",
].includes(listItem.getId())

export const deskStructure = (S) =>
	S.list()
		.title("Contents")
		.items([
			S.listItem()
				.title("Catalogue")
				.icon(BookIcon)
				.child(
					S.documentTypeList("work")
						.title("Catalogue")
						.menuItems([
							S.orderingMenuItem({ title: "year (new → old)", by: [{ field: "year", direction: "desc" }] }),
							S.orderingMenuItem({ title: "year (old → new)", by: [{ field: "year", direction: "asc" }] }),
						])
				),
			S.listItem()
				.title("Types")
				.icon(TagIcon)
				.child(
					S.documentTypeList("workType")
						.title("Types")
				),
			S.divider(),
			S.listItem()
				.title("Settings")
				.icon(CogIcon)
				.child(
					S.list()
						.title("Settings")
						.items([
							S.listItem()
								.title("Metadata")
								.icon(InfoOutlineIcon)
								.child(
									S.document()
										.schemaType("metadata")
										.documentId("metadata")
								),
							S.listItem()
								.title("Colours")
								.icon(LemonIcon)
								.child(
									S.document()
										.schemaType("colours")
										.documentId("colours")
								),
						])
				),
			S.divider(),
			...S.documentTypeListItems().filter(hiddenDocumentTypes)
		])