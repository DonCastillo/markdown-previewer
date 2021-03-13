import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	html: {
		wordWrap: "break-word",
	},
});

const Html = (props) => {
	const classes = useStyles();
	const { html } = props;

	useEffect(() => {
		const el = document.getElementById("html");
		el.innerHTML = html;
	});

	return <div className={classes.html} id="html"></div>;
};

export default Html;
