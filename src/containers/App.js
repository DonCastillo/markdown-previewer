// import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import ToggleColor from "./../components/ToggleColor";
import Markdown from "./../components/Markdown";
import Html from "./../components/Html";
import Container from "@material-ui/core/Container";
const marked = require("marked");

const initialContent = `# Heading 1
## Heading 2 
### Heading 3`;

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			style: {
				color: "#FFF",
				backgroundColor: "#000",
			},
			markdown: "",
			html: "",
		};
	}


	toggleColor = (newTheme) => {
		this.setState({style: {...newTheme}});
	}

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
		return (
			<Container
				component="div"
				maxWidth="xl"
				style={this.state.style}
			>
				<ToggleColor toggleColor={this.toggleColor} />
				<div id="parent-container">
					<Markdown change={this.changeHandler}>
						{this.state.markdown}
					</Markdown>
					<Html></Html>
				</div>
			</Container>
		);
	}
}

export default App;
