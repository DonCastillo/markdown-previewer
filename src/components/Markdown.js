import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	textarea: {
		display: "block",
		height: "99%",
		width: "99.30%",
		resize: "none",
		"&::focus": {
			outline: 0,
			backgroundColor: "orange",
		},
	},
});

const Markdown = (props) => {
	const classes = useStyles();
	console.log(classes);
	return (
		<textarea
			className={classes.textarea}
			style={props.style}
			onChange={props.change}
			value={props.children}
		></textarea>
	);
};

export default Markdown;
