import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/style.css';
import '../../css/toast.css';
import logo from '../../images/car.png'
import bars from '../../images/bars.svg'

const User = () => (
    <div className="wrapper">
        <div className="row" id="niv">
            <div className="col-12">
                <nav className="bar">
                    <span className="nav-toggle" id="js-toggle">
                        <img className="mobile" src={bars} />
                    </span>
                    <a href="#" className="logo font">SM</a>
                    <ul className="main-nav" id="nav-menu">
                        <li><NavLink className="links" to='/signup'>Sign Up</NavLink></li>
                        <li><NavLink className="links" to='/' onClick={() => localStorage.removeItem('token')}>
                            Logout
                </NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
        <div className="row" id="niv">
            <div className="col-12">
                <h2>Fahad Makabugo</h2>
                <p>Lorem ipsum Lorem ipsumLorem ipsumLorem ipsum<br />
                    Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</p>
            </div>
        </div>

    </div>
);
export default User;