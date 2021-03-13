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
					{children}
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
				<Markdown change={changeHandler} style={theme}>
					{markdown}
				</Markdown>
			</TabPanel>
			<TabPanel value={value} index={1}>
				<Html html={html}></Html>
			</TabPanel>
		</div>
	);
};

export default TwoPanel;
