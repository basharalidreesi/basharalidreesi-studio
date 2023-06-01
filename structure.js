import { DatabaseIcon, TagIcon } from "@sanity/icons"

const hiddenTypes = new Set([
	"category",
	"project",
])

export const structure = (S) =>
	S.list()
		.title("Library")
		.items([
			S.listItem()
				.title("Projects")
				.icon(DatabaseIcon)
				.child(
					S.documentTypeList("project")
						.title("Projects")
						.menuItems([
							S.orderingMenuItem({
								title: "year (new → old)",
								by: [
									{
										field: "year",
										direction: "desc",
									},
									{
										field: "title",
										direction: "asc",
									},
								],
							}),
							S.orderingMenuItem({
								title: "year (old → new)",
								by: [
									{
										field: "year",
										direction: "asc",
									},
									{
										field: "title",
										direction: "asc",
									},
								],
							}),
						])
						.defaultOrdering([
							{
								field: "year",
								direction: "desc",
							},
							{
								field: "title",
								direction: "asc",
							},
						])
				),
			S.listItem()
				.title("Categories")
				.icon(TagIcon)
				.child(
					S.documentTypeList("category")
						.title("Categories")
						.menuItems([
							S.orderingMenuItem({
								title: "title (a → z)",
								by: [
									{
										field: "title",
										direction: "asc",
									},
								],
							}),
							S.orderingMenuItem({
								title: "title (z → a)",
								by: [
									{
										field: "title",
										direction: "desc",
									},
								],
							}),
						])
						.defaultOrdering([
							{
								field: "title",
								direction: "asc",
							},
							{
								field: "title",
								direction: "asc",
							},
						])
				),
			S.divider(),
			...S.documentTypeListItems().filter((type) => !hiddenTypes.has(type.spec.id))
		])