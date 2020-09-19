import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.svg'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <Link to='/'>
                    <img src={logo} alt='store' className='navbar-brand'></img>
                </Link>          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li class="nav-item ml-5">
                 <Link to='/' className='nav-link '>
                    Products
                 </Link>
                </li>
              </ul>
              <Link to='./cart' className='ml-auto'>
                  <button className='btn btn-warning'>
                      My Cart
                  </button>
              </Link>
            </div>
          </nav>
        )
    }
}

