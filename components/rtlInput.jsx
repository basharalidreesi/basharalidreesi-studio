export const rtlInput = (props) => {
	return (
		<div dir={"rtl"}>
			{props.renderDefault(props)}
		</div>
	)
}