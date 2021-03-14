import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	textarea: {
		display: "block",
		height: "99%",
		width: "99.30%",
		resize: "none",
        border:0,
		"&::focus": {
			outline: 0,
			backgroundColor: "orange",
		},
	},
});

const Markdown = (props) => {
	const classes = useStyles();
	return (
		<textarea
			id="editor"
			className={classes.textarea}
			style={props.style}
			onChange={props.change}
			value={props.children}
		></textarea>
	);
};

export default Markdown;
