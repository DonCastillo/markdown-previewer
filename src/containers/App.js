// import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import ToggleColor from "./../components/ToggleColor";
import Markdown from "./../components/Markdown";
import Html from "./../components/Html";
import Container from "@material-ui/core/Container";
import { createStyles, withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { orange } from "@material-ui/core/colors";
const marked = require("marked");

const initialContent = `Marked - Markdown Parser
========================

[Marked] lets you convert [Markdown] into HTML.  Markdown is a simple text format whose goal is to be very easy to read and write, even when not converted to HTML.  This demo page will let you type anything you like and see how it gets converted.  Live.  No more waiting around.

How To Use The Demo
-------------------

1. Type in stuff on the left.
2. See the live updates on the right.

That's it.  Pretty simple.  There's also a drop-down option in the upper right to switch between various views:

- **Preview:**  A live display of the generated HTML as it would render in a browser.
- **HTML Source:**  The generated HTML before your browser makes it pretty.
- **Lexer Data:**  What [marked] uses internally, in case you like gory stuff like this.
- **Quick Reference:**  A brief run-down of how to format things using markdown.

Why Markdown?
-------------

It's easy.  It's not overly bloated, unlike HTML.  Also, as the creator of [markdown] says,

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

Ready to start writing?  Either start changing stuff on the left or
[clear everything](/demo/?text=) with a simple click.

[Marked]: https://github.com/markedjs/marked/
[Markdown]: http://daringfireball.net/projects/markdown/
`;

const styles = (theme) => ({
	root: {
		position: "absolute",
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
	},
	paper: {
		backgroundColor: "",
		// fontSize: 20,
		padding: "2%",
		margin: "2%",
		height: "85vh",
		border:"1px solid black",
		overflowY: "auto",
		position: "relative"
	},
});




class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			theme: {
				color: "",
				backgroundColor: "",
			},
			markdown: "",
			html: "",
		};
	}

	toggleColor = (newTheme) => {
		this.setState({ theme: { ...newTheme } });
	};

	setMarkdown = (string) => {
		this.setState({ markdown: string });
	};

	renderHTML = (string) => {
		const html = marked(string);
		this.setState({ html: html });
	};

	renderMarkup = (string) => {
		const body = document.getElementsByTagName("body")[0]
		body.style.color = this.state.theme.color;
		body.style.backgroundColor = this.state.theme.backgroundColor;
		const el = document.getElementById("html");
		el.innerHTML = string;
	};

	changeHandler = (event) => {
		this.setMarkdown(event.target.value);
		this.renderHTML(event.target.value);
	};

	componentDidMount = () => {
		this.toggleColor();
		this.setMarkdown(initialContent);
		this.renderHTML(initialContent);
	};

	componentDidUpdate = () => {
		this.renderMarkup(this.state.html);
	};

	render() {
		const { classes } = this.props;
		console.log(classes);
		return (
			<Container
				component="div"
				// style={this.state.theme}
				className={classes.root}
				maxWidth={false}
			>
				<ToggleColor toggleColor={this.toggleColor} />

				<Grid container spacing={3}>
					<Grid item xs={12} md={6}>
						<Paper
							className={classes.paper}
							style={this.state.theme}
						>
							<Markdown
								change={this.changeHandler}
								style={this.state.theme}
							>
								{this.state.markdown}
							</Markdown>
						</Paper>
					</Grid>
					<Grid item xs={12} md={6}>
						<Paper
							className={classes.paper}
							style={this.state.theme}
						>
							<Html></Html>
						</Paper>
					</Grid>
				</Grid>

				{/* <div id="parent-container"></div> */}
			</Container>
		);
	}
}

export default withStyles(styles)(App);
