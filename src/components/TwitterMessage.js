import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleStateChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" maxLength={this.props.maxChars} onChange={e => this.handleStateChange(e)} value = {this.state.message}/>
        {this.props.maxChars - this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
