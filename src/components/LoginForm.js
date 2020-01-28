import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  updateUsername = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  updatePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    if(this.state.username !== "" && this.state.password !== ""){
      this.props.handleLogin(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={e => this.updateUsername(e)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={e => this.updatePassword(e)}/>
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
