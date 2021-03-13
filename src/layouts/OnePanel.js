import React from "react";
import Markdown from "./../components/Markdown";
import Html from "./../components/Html";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const TwoPanel = (props) => {
	return (
		<Grid container spacing={3}>
			<Grid item xs={12} md={6}>
				<Paper className={props.paper} style={props.theme}>
					<Markdown change={props.changeHandler} style={props.theme}>
						{props.markdown}
					</Markdown>
				</Paper>
			</Grid>
			<Grid item xs={12} md={6}>
				<Paper className={props.paper} style={props.theme}>
					<Html></Html>
				</Paper>
			</Grid>
		</Grid>
	);
};

export default TwoPanel;
