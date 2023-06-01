import { defineArrayMember, defineField, defineType } from "sanity"
import { ExposedArrayFunctions, ReferenceMultiSelect } from "../../components"
import { filterAlreadyReferencedDocuments, previewPortableText } from "../../lib"
import { DatabaseIcon, EditIcon, ImageIcon } from "@sanity/icons"

export default defineType({
	name: "project",
	type: "document",
	title: "Project",
	icon: DatabaseIcon,
	fields: [
		defineField({
			name: "title",
			type: "string",
			title: "Title",
			description: "",
		}),
		defineField({
			name: "pretitle",
			type: "string",
			title: "Pretitle",
			description: "",
		}),
		defineField({
			name: "subtitle",
			type: "string",
			title: "Subtitle",
			description: "",
		}),
		defineField({
			name: "year",
			type: "number",
			title: "Year",
			description: "",
		}),
		defineField({
			name: "categories",
			type: "array",
			title: "Categories",
			description: "",
			of: [
				defineArrayMember({
					type: "reference",
					title: "Category",
					description: "",
					to: [{ type: "category" }],
					options: {
						filter: ({parent}) => filterAlreadyReferencedDocuments(parent),
					},
				}),
			],
			components: {
				input: (props) => <ReferenceMultiSelect options={{
					query: `*[_type == "category"] | order(lower(title) asc) { _id }._id`,
				}} {...props} />,
			},
		}),
		defineField({
			name: "content",
			type: "array",
			title: "Content",
			description: "",
			of: [
				defineArrayMember({
					name: "textContent",
					type: "object",
					title: "Text",
					icon: EditIcon,
					fields: [
						defineField({
							name: "heading",
							type: "string",
							title: "Heading",
							description: "",
						}),
						defineField({
							name: "text",
							type: "portableText",
							title: "Text",
							description: "",
						}),
					],
					preview: {
						select: {
							heading: "heading",
							text: "text",
						},
						prepare(selection) {
							const {
								heading,
								text,
							} = selection
							return {
								title: heading || previewPortableText(text),
								subtitle: heading && text ? previewPortableText(text) : null
							}
						},
					},
				}),
				defineArrayMember({
					name: "imageContent",
					type: "image",
					title: "Image",
					icon: ImageIcon,
					fields: [
						defineField({
							name: "caption",
							type: "text",
							title: "Caption",
							description: "",
							rows: 4,
						}),
					],
					preview: {
						select: {
							asset: "asset",
							caption: "caption",
						},
						prepare(selection) {
							const {
								asset,
								caption,
							} = selection
							return {
								title: caption,
								media: asset,
							}
						},
					},
				}),
			],
			components: {
				input: ExposedArrayFunctions,
			},
		}),
	],
	orderings: [
		{
			title: "year (new → old)",
			name: "yearDesc",
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
		},
		{
			title: "year (old → new)",
			name: "YearAsc",
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
		},
	],
	preview: {
		select: {
			title: "title",
			pretitle: "pretitle",
			subtitle: "subtitle",
		},
		prepare(selection) {
			const {
				title,
				pretitle,
				subtitle,
			} = selection
			return {
				title: title,
				subtitle: [pretitle, subtitle]?.filter(Boolean)?.join(" • "),
			}
		},
	},
})