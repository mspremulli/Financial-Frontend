import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = (props) => {
    return(
        <div className = "navbar">
          <h1 className='left'>
            <Link to='/'>Financial Fraud Reporter</Link>
          </h1> 
          <h4 className='right'>
            <Link to = '/login'>Login</Link>
          </h4>
          <h4 className='right'>
            <Link to = '/signup'>Sign Up</Link>
          </h4>
        </div>
    )
}

export default Navbar;