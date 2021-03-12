import React, { useEffect, useState } from "react";
import { Container, Switch } from "@material-ui/core";

const ToggleColor = (props) => {
	const [state, setState] = useState(false);

	const changeHandler = (event) => {
		setState(event.target.checked);
	};

	useEffect(() => {
		if (state) {
			props.toggleColor({ color: "#FFF", backgroundColor: "#000" });
		} else {
			props.toggleColor({ color: "#000", backgroundColor: "#FFF" });
		}
	}, [state]);

	return (
		<Container>
			<Switch
				value=""
				checked={state}
				onChange={changeHandler}
				inputProps={{ "aria-label": "" }}
			/>
		</Container>
		// <div>
		//     <p>Toggle</p>
		// </div>
	);
};

export default ToggleColor;
