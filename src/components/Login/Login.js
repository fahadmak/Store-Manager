import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLogin } from '../../actions/auth/authActions';
import { NavLink } from 'react-router-dom';
import '../../css/style.css';
import logo from '../../images/logo.png'
import { toast } from 'react-toastify';
import Loader from '../Loader/Loader'

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: {
        username: '',
        password: '',
        error: ''
      },
      message: {},
      loading: false,
      isButtonDisabled: false
    };
  }
  componentWillReceiveProps(nextProps) {
    const admin = localStorage.getItem('admin')
    const { error, history, message } = nextProps
    if (error) {
      this.setState({
        error: error.data,
        loading: false,
        isButtonDisabled: false
      });
    }
    if (message) {
      this.setState({
        message: message,
        loading: false,
        isButtonDisabled: false
      });
      localStorage.setItem('token', message.access_token)
      localStorage.setItem('admin', message.admin)
      toast.success(this.state.message);
      if (message.admin) {
        history.push('/home');
      }
    }
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state
    const data = {
      username: username,
      password: password
    };

    this.setState({
      loading: true,
      password: '',
      username: '',
      isButtonDisabled: true
    })
    this.props.fetchLogin(data);
  };

  render() {
    return (
      <div className="wrapper">
        <div className="row">
          <div className="col-12">
            <div className="log">
              <img className="locate" src={logo} />
              <div className="login">
                <p id="merrortext" className="stl">{this.state.error && this.state.error.error}</p>
                <form className="sign" name="login_p" onSubmit={this.handleSubmit}>
                  <div className="box-section">
                    <div className="form-section">
                      <p id="uerrortext" className="stl">{this.state.error ? (this.state.error.username && "Username should contain at least 4 letters and a number") : ""}</p>
                      <input type="text" name="username" className="first" value={this.state.username} onChange={this.onChange} id="username" placeholder="User Name" />
                    </div>
                  </div>
                  <br />
                  <div className="box-section">
                    <div className="form-section">
                      <p id="perrortext" className="stl">{this.state.error ? (this.state.error.password && "Password should contain at least 4 letters and a number") : ""}</p>
                      <input type="password" name="password" id="password" value={this.state.password} onChange={this.onChange} placeholder="Password" className="first" />
                    </div>
                  </div>
                  <br />
                  {this.state.loading ? <Loader /> : null}
                  <div className="login-btns">
                    <button className="sb size" id="logs" disabled={this.state.isButtonDisabled} value="Login">Login</button>
                  </div>
                  <br />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  error: state.auth.error,
  message: state.auth.message
});

export default connect(
  mapStateToProps,
  { fetchLogin }
)(Login);
