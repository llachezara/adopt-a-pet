import { NavLink } from "react-router-dom";

export default function Header(){
    return (
        <header>
        {/* Nav for guest */}
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
              <NavLink to="#" className="nav-link register">
                Register
                </NavLink>
            </li>
          </ul>
        </nav>
        {/* Nav for authenticated user */}
        {/* <nav>
          <ul class="main-nav-list">
              <li><NavLink href="/" class="nav-link logo">AdoptAPet</a></li>
              <li><NavLink href="#" class="nav-link">Dashboard</a></li>
          </ul>
          <ul class="user-nav-list">
              <li><NavLink href="#" class="nav-link create">Create</NavLink></li>
              <li><NavLink class="nav-link likes-link"></NavLink></li>
              <li class="profile-menu">
                  <NavLink class="nav-link profile-link"></NavLink>
                  <div class="dropdown-menu">
                      <NavLink href="#">View details →</NavLink>
                      <NavLink href="#">Logout</NavLink>
                  </div>
              </li>
          </ul>
      </nav> */}
      </header>
      )
}