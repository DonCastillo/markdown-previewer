import React, { useEffect, useState } from "react";
import { Container, Switch } from "@material-ui/core";

const ToggleColor = (props) => {
	const [state, setState] = useState(false);
	const { toggleColor } = props;

	const changeHandler = (event) => {
		setState(event.target.checked);
	};

	useEffect(() => {
		if (state) {
			toggleColor({ color: "#FFF", backgroundColor: "#000" });
		} else {
			toggleColor({ color: "#000", backgroundColor: "#FFF" });
		}
	}, [state, toggleColor]);

	return (
		<Container
			maxWidth={false}
			component="div"
			style={{ display: "flex", justifyContent: "flex-end" }}
		>
			<Switch
				value=""
				checked={state}
				onChange={changeHandler}
				inputProps={{ "aria-label": "" }}
				component="div"
				color="primary"
			/>
		</Container>
	);
};

export default ToggleColor;
