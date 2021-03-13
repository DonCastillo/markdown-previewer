import React from 'react'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	html: {
		wordWrap: "break-word"
	},
});

const Html = (props) => {
    const classes = useStyles();
    
    return (
        <div className={classes.html} id="html"></div>
    )
}

export default Html;