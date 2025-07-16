import React from 'react'
import { Link } from 'react-router-dom'

const PostNavbar = () => {
  return (
    <div>
      <nav className="navbar" style={{ backgroundColor: 'brown' }}>
        <div className="container-fluid">
          <a className="navbar-brand text-white fw-bold" href="#">Post App</a>
          <ul className="navbar-nav d-flex flex-row gap-3">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Add Post</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/search">Search Post</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/delete">Delete Post</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/view">ViewALL Post</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default PostNavbar
