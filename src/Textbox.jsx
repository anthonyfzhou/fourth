import React, { Component } from 'react';
import './Textbox.css';
const prompts = ["wow that's crazy that you looked through Jenn's spotify??",
				"perhaps we'll have to look through other officer's social medias in the future hint hint",
				"moving into the next room, you see Howie and Vidya just absolutely tearing it up on Valorant",
				"which is odd because you have definitely never seen Vidya even mention valorant or anything related to it ever in her life",
				"regardless, here she is, just AWP(u cannot pay me to call it the operator that name is lame)-ing down mid",
				"just like jenn, they don't seem to hear you for some reason?",
				"you figure they must be listening to some music also, but they're listening to the same thing",
				"it looks like this stage also requires some incredibly arbitrary step",
				"looks like you'll have to SUBMIT A 30 SECOND VIDEO OF YOUR GROUP SINGING THE SELECTED SONG WITH EVERY MEMBER PARTICIPATING WOW!!!! (this would be the password for this stage)",
				"wow but you don't even know where to find the song, and if you did, anthony must have posted multiple",
				"perhaps there's something quite GROOVY in the picture that'll help determine which song you have to send to him?"];

class Textbox extends Component {
	constructor(props) {
		super(props);
		this.state = {text: prompts,
					  max: 11,
					  index: 0
					 };
		
		this.handleForward = this.handleForward.bind(this);
		this.handleBackwards = this.handleBackwards.bind(this);
	}
	
	handleForward() {
		console.log(this.state.index);
		if (this.state.index < (this.state.max - 1)) {
			this.setState({index: this.state.index + 1});
		}
	}
	
	handleBackwards() {
		if (this.state.index > 0) {
			this.setState({index: this.state.index - 1});
		}
	}
	
	renderBackwardsButton() {
		if (this.state.index == 0) {
			return null;
		}
		return <button onClick={this.handleBackwards}>Previous</button>;
	}
	
	renderForwardsButton() {
		if (this.state.index >= this.state.max - 1) {
			return null;
		}
		return <button onClick={this.handleForward}>Next</button>;
	}
	
	renderContent() {
		if (this.state.index >= 2) {
			return <div className="content">
					<img id="val" src={require('./thesepicturesaremymasterpiecesandlikevangoghigounrecognized.png').default} />
					<img id="groovy" src={require('./itsthesecondsong.png').default} />
				   </div>;
		}
		return null;
	}
	
	render() {
		let content = this.renderContent();
		let forwardButton = this.renderForwardsButton();
		let backwardsButton = this.renderBackwardsButton();
		
		return (
			<div>
				<div id="textDisplay"> {this.state.text[this.state.index]} </div>
				<div>
					{backwardsButton}
					{forwardButton}
				</div>
				{content}
			</div>
		)
	}
}

export default Textbox;

