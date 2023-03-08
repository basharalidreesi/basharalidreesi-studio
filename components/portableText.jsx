import { Badge } from "@sanity/ui"

export const normalDecorator = props => (
	<div>
		<Badge tone="primary" contentEditable={false} style={{ userSelect: "none", marginTop: "-2.5px" }}>En</Badge>
		<div>{props?.renderDefault(props)}</div>
	</div>
)

export const languageDecorator = props => (
	<div style={{ paddingBlockEnd: "0.25rem" }}>
		<Badge tone="primary" contentEditable={false} style={{ userSelect: "none", marginTop: "-2.5px" }}><bdi dir="auto">{props?.value === "arSwitched" ? "← ar" : props?.value.replace("Switched", " →")}</bdi></Badge>
		{props?.renderDefault(props)}
	</div>
)

export const listDecorator = props => (
	<div style={{ paddingRight: "1.25rem" }}>{props?.renderDefault(props)}</div>
)

export const linkDecorator = props => (
	<span>{props?.renderDefault(props)}</span>
)