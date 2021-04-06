import React from 'react'
import { Link } from "react-router-dom"

export const Nav = () => {
  return (
    <div>
        <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/freelancers">Freelancers</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
