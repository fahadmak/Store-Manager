import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSignup } from '../../actions/auth/authActions';
import '../../css/style.css';
import logo from '../../images/logo.png'
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
                password: '',
                error: ''
            },
            message: {}
        };
    }
    componentWillReceiveProps(nextProps) {
        const { error, history, message } = nextProps;
        if (error) {
            this.setState({ error: error.data });
        }
        if (message) {
            this.setState({ message: message });
            history.push('/');
            toast.success('You are now signed up');
        }
    }

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        const data = {
            name: this.state.name,
            username: this.state.username,
            password: this.state.password
        };
        console.log(this.props)
        this.props.fetchSignup(data);
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
                                            <p id="uerrortext" className="stl">{this.state.error ? (this.state.error.name && "Minimum of 6 alphanumerics characters required") : ""}</p>
                                            <input type="text" name="name" className="first" onChange={this.onChange} id="name" placeholder="First Name" />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="box-section">
                                        <div className="form-section">
                                            <p id="uerrortext" className="stl">{this.state.error ? (this.state.error.username && "Minimum of 6 alphanumerics characters required") : ""}</p>
                                            <input type="text" name="username" className="first" onChange={this.onChange} id="username" placeholder="User Name" />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="box-section">
                                        <div className="form-section">
                                            <p id="perrortext" className="stl">{this.state.error ? (this.state.error.password && "Minimum of 6 alphanumerics characters required") : ""}</p>
                                            <input type="password" name="password" id="password" onChange={this.onChange} placeholder="Password" className="first" />
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
