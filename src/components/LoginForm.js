import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmitEvent = (event) => {
    event.preventDefault()
    console.log(event)
    if ((this.state.username !== '') && (this.state.password !== '')) {
      this.props.handleLogin(this.state)
  }
  }

  render() {
    return (
      <form onSubmit={event=>this.handleSubmitEvent(event)}>
        <div>
          <label>
            Username
            <input onChange={this.handleUsernameChange} value={this.state.username} id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.handlePasswordChange} value={this.state.password} id="password" name="password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
