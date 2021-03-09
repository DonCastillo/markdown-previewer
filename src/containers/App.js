import "./App.css";
import React from "react";
import ReactDOM from 'react-dom';
import ToggleColor from "./../components/ToggleColor";
import Markdown from "./../components/Markdown";
import Html from "./../components/Html";
const marked = require("marked");

const initialContent = 
`# Heading 1
## Heading 2 
### Heading 3`;


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			theme: {
				color: "#FFF",
				background: "#000",
			},
			markdown: "",
			html: "",
		};
	}

	toggleColor = () => {
		this.setState((state) => {
			const color = state.theme.color === "#000" ? "#FFF" : "#000";
			const background = state.theme.background === "#000" ? "#FFF" : "#000";
			return { theme: { color: color, background: background } };
		});
	};

	setMarkdown = (string) => {
		this.setState({ markdown: string });
	};

	renderHTML = (string) => {
		const html = marked(string);
		this.setState({ html: html });
	};

	renderMarkup = (string) => {
		const el = document.getElementById('html');
		el.innerHTML = string;
	}

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
	}

	render() {
		return (
			<div>
				<ToggleColor />
				<div id="parent-container">
					<Markdown change={this.changeHandler}>
						{this.state.markdown}
					</Markdown>
					<Html></Html>
				</div>
			</div>
		);
	}
}

export default App;
