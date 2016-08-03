import React, {Component} from 'react'
import 'whatwg-fetch'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: props.email || '',
      password: props.password || ''
    }
  }

  handleSubmit (e) {
    e.preventDefault()
    window.fetch('/auth/login', {
      method: 'Post',
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    }).then(function (response) {
      console.log(response)
      alert('failed')
    })
  }

  handleEmailChange (e) {
    this.setState({email: e.target.value})
  }

  handlePasswordChange (e) {
    this.setState({password: e.target.value})
  }

  render () {
    return(
      <div className="o-content">
        <div className="o-centered-card">
          <div className="c-auth-form">
            <form className="c-auth-form__form" id="new_session" onSubmit={this.handleSubmit.bind(this)}>
              <div className="c-auth-form__input-field">
                <label htmlFor="session_email">Email</label>
                <input type="text" name="session[email]" id="session_email" value={this.state.email} onChange={this.handleEmailChange.bind(this)} />
              </div>
              <div className="c-auth-form__input-field">
                <label htmlFor="session_password">Password</label>
                <input type="password" name="session[password]" id="session_password" value={this.state.password} onChange={this.handlePasswordChange.bind(this)} />
              </div>
              <button className="c-btn c-btn--xl c-auth-form__submit" type="submit">Log In</button>
            </form>
            <div className="c-auth-form__links">
              <a href="https://www.nav.com/pricing">Create Account</a>
              <a target="_self" href="/password_resets/new">Forgot Password?</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login