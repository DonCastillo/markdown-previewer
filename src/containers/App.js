import React from "react";
import ToggleColor from "./../components/ToggleColor";
import Container from "@material-ui/core/Container";
import {
	createMuiTheme,
	ThemeProvider,
	withStyles,
} from "@material-ui/core/styles";
import InitialContent from "../components/InitialContent";
import TwoPanel from "../layouts/TwoPanel";
// import OnePanel from "../layouts/OnePanel";
import { green } from "@material-ui/core/colors";
const marked = require("marked");

marked.setOptions({
	render: new marked.Renderer(),
	highlight: function (code, language) {
		const hljs = require("highlight.js");
		const validLanguage = hljs.getLanguage(language)
			? language
			: "plaintext";
		return hljs.highlight(validLanguage, code).value;
	},
	gfm: true,
	breaks: true,
});

const theme = createMuiTheme({
	palette: {
		primary: {
			main: green[500],
		},
	},
});

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
			windowSize: 0,
		};
	}

	toggleColor = (newTheme) => {
		this.setState({ theme: { ...newTheme } });
	};

	setMarkdown = (string) => {
		this.setState({ markdown: string });
	};

	setWindowSize = (width) => {
		this.setState({ windowSize: width });
	};

	renderHTML = (string) => {
		const html = marked(string);
		this.setState({ html: html });
	};

	renderMarkup = (string) => {
		const body = document.getElementsByTagName("body")[0];
		body.style.color = this.state.theme.color;
		body.style.backgroundColor = this.state.theme.backgroundColor;
		const el = document.getElementById("preview");
		if (el) el.innerHTML = string;
	};

	changeHandler = (event) => {
		this.setMarkdown(event.target.value);
		this.renderHTML(event.target.value);
	};

	componentDidMount = () => {
		this.toggleColor();
		this.setMarkdown(InitialContent);
		this.renderHTML(InitialContent);
		this.setWindowSize(window.innerWidth);
		window.addEventListener("resize", () =>
			this.setWindowSize(window.innerWidth)
		);
	};

	componentDidUpdate = () => {
		this.renderMarkup(this.state.html);
	};

	render() {
		const { classes } = this.props;
		let layout = (
			<TwoPanel
				paper={classes.paper}
				theme={this.state.theme}
				changeHandler={this.changeHandler}
				markdown={this.state.markdown}
				html={this.state.html}
			/>
		);

		if (this.state.windowSize < 960) {
			layout = (
				// <OnePanel
				// 	paper={classes.paper}
				// 	theme={this.state.theme}
				// 	changeHandler={this.changeHandler}
				// 	markdown={this.state.markdown}
				// 	html={this.state.html}
				// />
				<TwoPanel
					paper={classes.paper}
					theme={this.state.theme}
					changeHandler={this.changeHandler}
					markdown={this.state.markdown}
					html={this.state.html}
				/>
			);
		}

		return (
			<ThemeProvider theme={theme}>
				<Container
					component="div"
					className={classes.root}
					maxWidth={false}
				>
					<ToggleColor toggleColor={this.toggleColor} />
					{layout}
				</Container>
			</ThemeProvider>
		);
	}
}

export default withStyles(styles)(App);
