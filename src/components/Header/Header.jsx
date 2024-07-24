export default function Header(){
    return (
        <header>
        {/* Nav for guest */}
        <nav>
          <ul className="main-nav-list">
            <li>
              <a href="#" className="nav-link logo">
                AdoptAPet
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Dashboard
              </a>
            </li>
          </ul>
          <ul className="auth-nav-list">
            <li>
              <a href="#" className="nav-link">
                Login
              </a>
            </li>
            <li>
              <a href="#" className="nav-link register">
                Register
              </a>
            </li>
          </ul>
        </nav>
        {/* Nav for authenticated user */}
        {/* <nav>
          <ul class="main-nav-list">
              <li><a href="#" class="nav-link logo">AdoptAPet</a></li>
              <li><a href="#" class="nav-link">Dashboard</a></li>
          </ul>
          <ul class="user-nav-list">
              <li><a href="#" class="nav-link create">Create</a></li>
              <li><a class="nav-link likes-link"></a></li>
              <li class="profile-menu">
                  <a class="nav-link profile-link"></a>
                  <div class="dropdown-menu">
                      <a href="#">View details →</a>
                      <a href="#">Logout</a>
                  </div>
              </li>
          </ul>
      </nav> */}
      </header>
      )
}