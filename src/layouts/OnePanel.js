import React from "react";
import Markdown from "./../components/Markdown";
import Html from "./../components/Html";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { AppBar, Box, Divider, Tab, Tabs, Typography } from "@material-ui/core";

const TabPanel = (props) => {
	const { children, value, index } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`tabpanel-${index}`}
			aria-labelledby={`tabpanel-${index}`}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
};

const TwoPanel = (props) => {
	const [value, setValue] = React.useState(0);
	const { paper, theme, changeHandler, markdown, html } = props;

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div>
			<AppBar position="relative" color="primary">
				<Tabs value={value} onChange={handleChange} aria-label="">
					<Tab label="Markdown" />
					<Tab label="HTML" />
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0}>
				Item One
			</TabPanel>
			<TabPanel value={value} index={1}>
				Item Two
			</TabPanel>

			<Grid container spacing={3}>
				<Grid item xs={12} md={6}>
					<Paper className={paper} style={theme}>
						<Markdown
							change={changeHandler}
							style={theme}
						>
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
		</div>
	);
};

export default TwoPanel;
