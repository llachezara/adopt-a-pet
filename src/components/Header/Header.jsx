import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

export default function Header() {
  const user = useContext(AuthContext);

  return (
    <header>

      {user.isPresent ?
      (<nav>
        <ul className="main-nav-list">
          <li>
            <NavLink href="/" className="nav-link logo">
              AdoptAPet
            </NavLink>
          </li>
          <li>
            <NavLink href="#" className="nav-link">
              Dashboard
            </NavLink>
          </li>
        </ul>
        <ul className="user-nav-list">
          <li>
            <NavLink href="#" className="nav-link create">
              Create
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link likes-link">
            </NavLink>
          </li>
          <li className="profile-menu">
            <NavLink className="nav-link profile-link"></NavLink>
            <div className="dropdown-menu">
              <NavLink href="#">View details →</NavLink>
              <NavLink href="#">Logout</NavLink>
            </div>
          </li>
        </ul>
      </nav>)
      :
      ( 
      <nav>
        <ul className="main-nav-list">
          <li>
            <NavLink to="/" className="nav-link logo">
              AdoptAPet
            </NavLink >
          </li>
          <li>
            <NavLink to="#" className="nav-link">
              Dashboard
            </NavLink>
          </li>
        </ul>
        <ul className="auth-nav-list">
          <li>
            <NavLink to="#" className="nav-link">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/auth/register" className="nav-link register">
              Register
            </NavLink>
          </li>
        </ul>
      </nav>)}
    </header>
  )
}