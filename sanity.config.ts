import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import { visionTool } from "@sanity/vision"
import { schemaTypes } from "./schemas"
import { deskStructure } from "./deskStructure"
import { documentNode } from "./documentNode"

export default defineConfig({

	name: "default",
	title: "Bashar al-Idreesi",

	projectId: "mjz9thb6",
	dataset: "production",

	plugins: [
		deskTool({
			structure: deskStructure,
			defaultDocumentNode: documentNode,
		}),
		visionTool(),
	],

	schema: {
		types: schemaTypes,
	},
	
})
