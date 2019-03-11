import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSignup } from '../../actions/auth/authActions';
import '../../css/style.css';
import '../../css/toast.css';
import { NavLink } from 'react-router-dom';
import logo from '../../images/car.png'
import bars from '../../images/bars.svg'
import { toast } from 'react-toastify';

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      email: '',
      error: {
        name: '',
        username: '',
        password: '',
        error: ''
      },
      message: {}
    };
  }

  componentDidMount() {
    const token = localStorage.getItem('token')
    if (!token) {
      toast.error('Please login');
      console.log('print')
      this.props.history.push('/');
    }
  }

  componentWillReceiveProps(nextProps) {
    const { error, history, message } = nextProps;
    this.setState({ error: error.data && error.data.error });
    if (error) {
      this.setState({ error: error.data && error.data.error });
      toast.error(this.state.error)
    } else {
      this.setState({ message: message.message });
      toast.success(message.message);
    }

  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, username, password } = this.state
    const data = {
      name: name,
      username: username,
      password: password
    };
    this.props.fetchSignup(data);
  };

  render() {
    return (
      <div className="wrapper">
        <div className="row" id="niv">
          <div className="col-12">

            <nav className="bar">
              <span className="nav-toggle" id="js-toggle">
                <img className="mobile" src={bars} />
              </span>
              <a href="#" className="logo font">SM</a>
              <ul className="main-nav" id="nav-menu">
                <li><a className="links" href="#">Products</a></li>
                <li><NavLink className="links" to='/' onClick={() => localStorage.removeItem('token')}>
                  Logout
                </NavLink></li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <h1>Store Manager</h1>
            <p id='join_text'>
              Welcome Admin, please make sure you fill in all fields.
        </p>
            <div className="showcase">
              <img id="hidin" src={logo} />
            </div>
          </div>
          <div className="col-12">
            <div className="log">
              <div className="sign">
                <p id="merrortext" className="stl">{this.state.error && this.state.error.error}</p>
                <form className="sign" name="login_p" onSubmit={this.handleSubmit}>
                  <div className="box-section">
                    <div className="form-section">
                      <p id="uerrortext" className="stl">{this.state.error ? (this.state.error.name && "Name should contain at least 4 letters and a number") : ""}</p>
                      <input autoComplete="off" type="text" name="name" className="first" onChange={this.onChange} id="name" placeholder="First Name" />
                    </div>
                  </div>
                  <br />
                  <div className="box-section">
                    <div className="form-section">
                      <p id="uerrortext" className="stl">{this.state.error ? (this.state.error.username && "Username should contain at least 4 letters and a number") : ""}</p>
                      <input autoComplete="off" type="text" name="username" className="first" onChange={this.onChange} id="username" placeholder="User Name" />
                    </div>
                  </div>
                  <br />
                  <div className="box-section">
                    <div className="form-section">
                      <p id="perrortext" className="stl">{this.state.error ? (this.state.error.password && "Password should contain at least 4 letters and a number") : ""}</p>
                      <input autoComplete="off" type="password" name="password" id="password" onChange={this.onChange} placeholder="Password" className="first" />
                    </div>
                  </div>
                  <br />
                  <div className="login-btns">
                    <button className="sb size" id="logs" value="Login">SignUp</button>
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
  { fetchSignup }
)(SignUp);
