import React from 'react'
import { Link } from 'react-router-dom'
import './layout.scss'

// npm install --save-dev @iconify/react @iconify/icons-mdi
import { Icon, InlineIcon } from '@iconify/react';
import accountIcon from '@iconify/icons-mdi/account';


const Navbar = () => {
  return(
    <nav className='navbar'>
      <h1>
        Utah Freelance
      </h1>
      <ul>
        <li>
          {/* <Link>Home</Link>              */}
        </li>
        <li>
          {/* <Link>Home</Link>              */}
        </li>
        <li>
          {/* <Link>Home</Link>              */}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar