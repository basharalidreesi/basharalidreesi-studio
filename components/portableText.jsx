import { Badge } from "@sanity/ui"

export const normalDecorator = props => (
	<div>
		<div>{props.renderDefault(props)}</div>
	</div>
)

export const leftAlignedDecorator = props => (
	<div style={{ paddingBlockEnd: "0.25rem" }}>
		<Badge tone="primary" contentEditable={false} style={{ userSelect: "none", marginTop: "-2.5px" }}>Left</Badge>
		{props.renderDefault(props)}
	</div>
)

export const rightAlignedDecorator = props => (
	<div style={{ paddingBlockEnd: "0.25rem" }}>
		<Badge tone="primary" contentEditable={false} style={{ userSelect: "none", marginTop: "-2.5px" }}>Right</Badge>
		{props.renderDefault(props)}
	</div>
)

export const centreAlignedDecorator = props => (
	<div style={{ paddingBlockEnd: "0.25rem" }}>
		<Badge tone="primary" contentEditable={false} style={{ userSelect: "none", marginTop: "-2.5px" }}>Centre</Badge>
		{props.renderDefault(props)}
	</div>
)

export const isolationDecorator = props => (
	<bdi style={{ textDecoration: "underline", textDecorationStyle: "wavy", }}>{props.children}</bdi>
)

export const listDecorator = props => (
	<div style={{ paddingRight: "1rem" }}>{props.renderDefault(props)}</div>
)

export const linkDecorator = props => (
	<span>{props.renderDefault(props)}</span>
)