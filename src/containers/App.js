// import "./App.css";
import React from "react";
import ToggleColor from "./../components/ToggleColor";
import Markdown from "./../components/Markdown";
import Html from "./../components/Html";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import InitialContent from "../components/InitialContent";
const marked = require("marked");

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
		padding: "2%",
		margin: "2%",
		height: "85vh",
		border: "1px solid black",
		overflowY: "auto",
		position: "relative",
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
		const body = document.getElementsByTagName("body")[0];
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
		this.setMarkdown(InitialContent);
		this.renderHTML(InitialContent);
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
			</Container>
		);
	}
}

export default withStyles(styles)(App);
