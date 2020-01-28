import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handeUsernameChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if(this.state.username.length > 0 && this.state.password.length > 0) {
      let userData = {username: this.state.username, password: this.state.password}
      this.props.handleLogin(userData)
    } else {
      console.log('empty fields')
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input onChange={event => this.handeUsernameChange(event)} id="username" name="username" type="text" value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={event => this.handlePasswordChange(event)} id="password" name="password" type="password" vlaue={this.state.password} />
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
