import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCircleUser } from "@fortawesome/free-solid-svg-icons";

import { AuthContext } from "../../contexts/AuthContext";
import { showErrorMessage, showSuccessMessage } from "../../utils/messagesUtil";
import { useLogout } from "../../hooks/auth-hooks/useLogout";

export default function Header() {
  const user = useContext(AuthContext);
  const { logout } = useLogout();
  const navigate = useNavigate();

  const onClickLogout = async () => {
    const logoutError = await logout();
    if (logoutError) {
      return showErrorMessage(logoutError.message);
    }

    showSuccessMessage("You've logged out. Come back anytime!");
    navigate("/");
  }

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
              <NavLink to="/dashboard" className="nav-link">
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
                <NavLink onClick={onClickLogout}>Logout</NavLink>
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
                <NavLink to="/dashboard" className="nav-link">
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