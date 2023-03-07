export const noInput = (props) => {
	return (
		<div></div>
	)
}

export const rtlInput = (props) => {
	return (
		<div dir={"rtl"}>
			{props.renderDefault(props)}
		</div>
	)
}