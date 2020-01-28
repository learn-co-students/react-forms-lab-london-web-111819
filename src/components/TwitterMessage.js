import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleMessageChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  listRemainingCharacters = () => {
    return <p>Remaining characters: {this.props.maxChars - this.state.message.length}</p>
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={event => this.handleMessageChange(event)} type="text" name="message" id="message" value={this.state.message} />
        {this.listRemainingCharacters()}
      </div>
    );
  }
}

export default TwitterMessage;
