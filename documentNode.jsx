import { CodeIcon, PencilIcon } from "@primer/octicons-react"

const jsonPreview = ({document}) => (
	<>
		<pre style={{ margin: "1em" }}>{JSON.stringify(document.displayed, null, 2)}</pre>
	</>
)

export const documentNode = (S) =>
	S.document().views([
		S.view.form().icon(() => <div><PencilIcon verticalAlign="baseline" /></div>),
		S.view.component(jsonPreview).title("JSON").icon(() => <div><CodeIcon verticalAlign="baseline" /></div>)
	])