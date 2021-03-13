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

const initialContent = `# Heading 1
## Heading 2 
### Heading 3`;

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
		fontSize: 20,
		padding: 10,
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
				maxWidth="xl"
				style={this.state.theme}
				className={classes.root}
			>
				<ToggleColor toggleColor={this.toggleColor} />

				<Grid container spacing={3}>
					<Grid item xs={12} md={6}>
						<Paper className={classes.paper}>s</Paper>
					</Grid>
					<Grid item xs={12} md={6}>
						<Paper className={classes.paper}>s</Paper>
					</Grid>
				</Grid>

				<div id="parent-container">
					<Markdown
						change={this.changeHandler}
						style={this.state.theme}
					>
						{this.state.markdown}
					</Markdown>
					<Html></Html>
				</div>
			</Container>
		);
	}
}

export default withStyles(styles)(App);
