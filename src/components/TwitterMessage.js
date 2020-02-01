import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      input: ''
    };
  }

  updateInput = e => {
    this.setState({
      input: e.target.value
    }) 
  }

  calculateRemainingCharacters = () => {
    return this.props.maxChars - this.state.input.length
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" 
        value={this.state.input}
        onChange={this.updateInput} />
        <br/>
        <span>{this.calculateRemainingCharacters()} characters remaining</span>
      </div>
    );
  }
}

export default TwitterMessage;
