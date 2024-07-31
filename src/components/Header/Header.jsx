import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCircleUser } from "@fortawesome/free-solid-svg-icons";

import { AuthContext } from "../../contexts/AuthContext";
import { useLogout } from "../../hooks/auth-hooks/useLogout";

export default function Header() {
  const user = useContext(AuthContext);
  const { logout } = useLogout();

  return (
    <header>

      {user.isPresent ?
        (<nav>
          <ul className="main-nav-list">
            <li>
              <NavLink to="/" className="nav-link logo">
                AdoptAPet
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="nav-link">
                Dashboard
              </NavLink>
            </li>
          </ul>
          <ul className="user-nav-list">
            <li>
              <NavLink to="/animal-profile/create" className="nav-link create">
                Create
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link likes-link">
                <FontAwesomeIcon icon={faHeart} />
              </NavLink>
            </li>
            <li className="profile-menu">
              <NavLink className="nav-link profile-link">
                <FontAwesomeIcon icon={faCircleUser} />
              </NavLink>
              <div className="dropdown-menu">
                <NavLink to="#">View details →</NavLink>
                <NavLink onClick={logout}>Logout</NavLink>
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
                <NavLink to="/auth/login" className="nav-link">
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