import React from 'react'
import { Link } from 'react-router-dom'
import './layout.scss'

// npm install --save-dev @iconify/react @iconify/icons-mdi
import { Icon, InlineIcon } from '@iconify/react';
import accountIcon from '@iconify/icons-mdi/account';


const Navbar = () => {
  return(
    <nav className='navbar'>
      <h1 className='logo'>
        Utah Freelance
      </h1>
      <ul>
        <li>
          <a href="">Home</a>
          {/* <Link>Home</Link>              */}
        </li>
        <li>
          <a href="">Home</a>
          {/* <Link>Home</Link>              */}
        </li>
        <li>
          <a href="">Home</a>
          {/* <Link>Home</Link>              */}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar