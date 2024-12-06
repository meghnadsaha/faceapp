const Navbar = () => {
  return (
    <header className="fixed-top navbar-light">
      <nav class="navbar navbar-expand-lg ">
        <div class="container">
          <a class="btn btn-primary" href="#" role="button">
            <i class="bi bi-megaphone-fill"></i>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex position-relative ms-2">
              <input
                class="form-control me-2 ps-5 bg-light"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <a class="btn  px-2 position-absolute" href="#" role="button">
                <i class="bi bi-search"></i>
              </a>
            </form>

            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Fixed button that should not move */}

          <ul class="nav flex-nowrap align-items-center  list-unstyled fixed-button">
            <li class="nav-item ms-2">
              <button type="button" class="btn btn-primary position-relative">
                <i class="bi bi-megaphone-fill"></i>
                <span class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2">
                  <span class="visually-hidden">unread messages</span>
                </span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
