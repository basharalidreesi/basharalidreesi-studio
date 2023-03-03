import { CodeIcon, EditIcon } from "@sanity/icons"

const jsonPreview = ({document}) => (
	<>
		<pre style={{ margin: "1em" }}>{JSON.stringify(document.displayed, null, 2)}</pre>
	</>
)

export const documentNode = (S) =>
	S.document().views([
		S.view.form().icon(EditIcon),
		S.view.component(jsonPreview).title("JSON").icon(CodeIcon),
	])