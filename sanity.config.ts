import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import { visionTool } from "@sanity/vision"
import { schemaTypes } from "./schemas"
import { structure } from "./structure"

export default defineConfig({
	name: "default",
	title: "Bashar al-Idreesi",
	projectId: "mjz9thb6",
	dataset: "production",
	plugins: [
		deskTool({
			title: "Library",
			structure,
		}),
		visionTool(),
	],
	schema: {
		types: schemaTypes,
	},
})
