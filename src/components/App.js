import React from 'react';
import { NavLink } from 'react-router-dom';

const App = () => (

  <div className="welcome_box">
    <div className="welcome_msg">
      Welcome to The Store Manager
        </div>
    <div className="welcome_links">
      <div className="welcome_msg"><NavLink to="/signup">Sign up</NavLink></div>
    </div>
  </div>
);

export default App;