import "./App.css";
import React from "react";
import ToggleColor from "./../components/ToggleColor";
import Markdown from "./../components/Markdown";
import Html from "./../components/Html";
const marked = require("marked");

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			theme: {
				color: "#FFF",
				background: "#000",
			},
			markdown: "",
      html: ""
		};
	}

  toggleColor = () => {
    this.setState((state) => {
      const color = state.theme.color === "#000" ? "#FFF" : "#000";
      const background = state.theme.background === "#000" ? "#FFF" : "#000";
      return {theme: {color: color, background: background}}
    });
  }

  setMarkdown = (string) => {
    this.setState({markdown: string})
  }

  renderHTML = (string) => {
    const html = marked(string);
    this.setState({html: html})
  }


  changeHandler = (event) => {
    this.setMarkdown(event.target.value);
    this.renderHTML(this.state.markdown);
  }

  componentDidMount = () => {
    this.toggleColor();
  }

	render() {
		return (
			<div>
				<ToggleColor />
				<div id="parent-container">
					<Markdown change={this.changeHandler}>{this.state.markdown}</Markdown>
					<Html>{this.state.html}</Html>
				</div>
			</div>
		);
	}
}

export default App;
