import React from "react";
import Markdown from "./../components/Markdown";
import Html from "./../components/Html";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const OnePanel = (props) => {
	const { paper, theme, changeHandler, markdown, html } = props;

	return (
		<Grid container spacing={3}>
			<Grid item xs={12} md={6}>
				<Paper className={paper} style={theme}>
					<Markdown change={changeHandler} style={theme}>
						{markdown}
					</Markdown>
				</Paper>
			</Grid>
			<Grid item xs={12} md={6}>
				<Paper className={paper} style={theme}>
					<Html html={html}></Html>
				</Paper>
			</Grid>
		</Grid>
	);
};

export default OnePanel;
