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

	return (
		<div
			className={classes.html}
			id="preview"
			dangerouslySetInnerHTML={{ __html: html }}
		></div>
	);
};

export default Html;
