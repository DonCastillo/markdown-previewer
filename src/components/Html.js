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
		const el = document.getElementById("preview");
		el.innerHTML = html;
	});

	return <div className={classes.html} id="preview"></div>;
};

export default Html;
