import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/style.css';
import logo from '../images/car.png'
import bars from '../images/bars.svg'

export class App extends Component {

  componentDidMount() {
    const token = localStorage.getItem('token')
    if (!token) {
      this.props.history.push('/');
    }
  }
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
                <li><NavLink className="links" to='/signup'>Sign Up</NavLink></li>
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
              Welcome store section, please make sure you fill in all fields.
        </p>
            <div className="showcase">
              <div className="limiter">
                <div className="container-table100">
                  <div className="wrap-table100">
                    <div className="table100">
                      <table>
                        <thead>
                          <tr className="table100-head">
                            <th className="column1">Date</th>
                            <th className="column2">Order ID</th>
                            <th className="column3">Name</th>
                            <th className="column4">Price</th>
                            <th className="column5">Quantity</th>
                            <th className="column6">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="column1">2017-09-29 01:22</td>
                            <td className="column2">200398</td>
                            <td className="column3">iPhone X 64Gb Grey</td>
                            <td className="column4">$999.00</td>
                            <td className="column5">1</td>
                            <td className="column6">$999.00</td>
                          </tr>
                          <tr>
                            <td className="column1">2017-09-28 05:57</td>
                            <td className="column2">200397</td>
                            <td className="column3">Samsung S8 Black</td>
                            <td className="column4">$756.00</td>
                            <td className="column5">1</td>
                            <td className="column6">$756.00</td>
                          </tr>
                          <tr>
                            <td className="column1">2017-09-26 05:57</td>
                            <td className="column2">200396</td>
                            <td className="column3">Game Console Controller</td>
                            <td className="column4">$22.00</td>
                            <td className="column5">2</td>
                            <td className="column6">$44.00</td>
                          </tr>
                          <tr>
                            <td className="column1">2017-09-25 23:06</td>
                            <td className="column2">200392</td>
                            <td className="column3">USB 3.0 Cable</td>
                            <td className="column4">$10.00</td>
                            <td className="column5">3</td>
                            <td className="column6">$30.00</td>
                          </tr>
                          <tr>
                            <td className="column1">2017-09-24 05:57</td>
                            <td className="column2">200391</td>
                            <td className="column3">Smartwatch 4.0 LTE Wifi</td>
                            <td className="column4">$199.00</td>
                            <td className="column5">6</td>
                            <td className="column6">$1494.00</td>
                          </tr>
                          <tr>
                            <td className="column1">2017-09-23 05:57</td>
                            <td className="column2">200390</td>
                            <td className="column3">Camera C430W 4k</td>
                            <td className="column4">$699.00</td>
                            <td className="column5">1</td>
                            <td className="column6">$699.00</td>
                          </tr>
                          <tr>
                            <td className="column1">2017-09-22 05:57</td>
                            <td className="column2">200389</td>
                            <td className="column3">Macbook Pro Retina 2017</td>
                            <td className="column4">$2199.00</td>
                            <td className="column5">1</td>
                            <td className="column6">$2199.00</td>
                          </tr>
                          <tr>
                            <td className="column1">2017-09-21 05:57</td>
                            <td className="column2">200388</td>
                            <td className="column3">Game Console Controller</td>
                            <td className="column4">$999.00</td>
                            <td className="column5">1</td>
                            <td className="column6">$999.00</td>
                          </tr>
                          <tr>
                            <td className="column1">2017-09-19 05:57</td>
                            <td className="column2">200387</td>
                            <td className="column3">iPhone X 64Gb Grey</td>
                            <td className="column4">$999.00</td>
                            <td className="column5">1</td>
                            <td className="column6">$999.00</td>
                          </tr>
                          <tr>
                            <td className="column1">2017-09-18 05:57</td>
                            <td className="column2">200386</td>
                            <td className="column3">iPhone X 64Gb Grey</td>
                            <td className="column4">$999.00</td>
                            <td className="column5">1</td>
                            <td className="column6">$999.00</td>
                          </tr>
                          <tr>
                            <td className="column1">2017-09-22 05:57</td>
                            <td className="column2">200389</td>
                            <td className="column3">Macbook Pro Retina 2017</td>
                            <td className="column4">$2199.00</td>
                            <td className="column5">1</td>
                            <td className="column6">$2199.00</td>
                          </tr>
                          <tr>
                            <td className="column1">2017-09-21 05:57</td>
                            <td className="column2">200388</td>
                            <td className="column3">Game Console Controller</td>
                            <td className="column4">$999.00</td>
                            <td className="column5">1</td>
                            <td className="column6">$999.00</td>
                          </tr>
                          <tr>
                            <td className="column1">2017-09-19 05:57</td>
                            <td className="column2">200387</td>
                            <td className="column3">iPhone X 64Gb Grey</td>
                            <td className="column4">$999.00</td>
                            <td className="column5">1</td>
                            <td className="column6">$999.00</td>
                          </tr>
                          <tr>
                            <td className="column1">2017-09-18 05:57</td>
                            <td className="column2">200386</td>
                            <td className="column3">iPhone X 64Gb Grey</td>
                            <td className="column4">$999.00</td>
                            <td className="column5">1</td>
                            <td className="column6">$999.00</td>
                          </tr>

                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>)
  }
};
export default App;
