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
	}, []);

	return (
		<Container>
			<Switch
				value=""
				checked={state}
				onChange={changeHandler}
				inputProps={{ "aria-label": "" }}
			/>
		</Container>
	);
};

export default ToggleColor;
