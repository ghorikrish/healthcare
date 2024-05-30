import { Link } from "react-router-dom";
export default function AdminMenu() {
  return (
    <>
      <nav>
        <div className="preloader flex-column justify-content-center align-items-center">
          <img className="animation__shake" src="dist/img/HealthCarelogo.jpg" alt="HealthCarelogo" height={60} width={60} />
        </div>
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
              <Link to="/home" className="nav-link">Home</Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" data-widget="navbar-search" href="#" role="button">
                <i className="fas fa-search" />
              </a>
              <div className="navbar-search-block">
                <form className="form-inline">
                  <div className="input-group input-group-sm">
                    <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                    <div className="input-group-append">
                      <button className="btn btn-navbar" type="submit">
                        <i className="fas fa-search" />
                      </button>
                      <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>
          </ul>
        </nav>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          <div className="sidebar">
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
              </div>
              <div className="info">
                <Link to="/" className="d-block">Alexander Pierce</Link>
              </div>
            </div>
            <div className="form-inline">
              <div className="input-group" data-widget="sidebar-search">
                <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                <div className="input-group-append">
                  <button className="btn btn-sidebar">
                    <i className="fas fa-search fa-fw" />
                  </button>
                </div>
              </div>
            </div>
            <nav className="mt-2">
              <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li className="nav-item">
                  <Link to="/home" className="nav-link">
                    <h5><i className="nav-icon fas fa-tachometer-alt text-primary" />Dashboard</h5>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/users" className="nav-link">
                    <h5><i className="nav-icon fa fa-user text-warning" /> User</h5>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/hospital" className="nav-link">
                    <h5><i className="nav-icon fa fa-hospital-alt text-danger" /> Hospital</h5>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/doctor" className="nav-link">
                    <h5><i className="nav-icon fa-solid fa-user-doctor text-info" /> Doctor</h5>
                  </Link>
                </li>
                {/* extra pages */}
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="fa fa-angle-down right" />
                    <h5><i className="nav-icon fa fa-plus-circle text-white" />Pages</h5>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <Link to="/" className="nav-link">
                        <h5><i className=" nav-icon fa fa-right-to-bracket text-success" />Login</h5>
                      </Link>
                    </li><li className="nav-item">
                      <Link to="/register" className="nav-link">
                        <h5><i className="nav-icon fa fa-registered text-success" /> Register</h5>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/changepassword" className="nav-link">
                        <h5><i className="nav-icon fa fa-lock text-success" /> Change Password</h5>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/forgetpass" className="nav-link">
                        <h5><i className="nav-icon fa fa-unlock text-danger" /> Forgot Password</h5>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/appointment" className="nav-link">
                    <h5><i className="nav-icon fa fa-calendar-check text-primary" /> Appointment</h5>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/oderds" className="nav-link">
                    <h5><i className="nav-icon fa fa-cart-plus text-warning" /> Orderds</h5>
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    <h5><i className=" nav-icon fa-solid fa-arrow-right-from-bracket text-danger" /> Logout</h5>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <h5><i className="nav-icon fa-solid fa-gear text-info" /> Setting</h5>
                  
                  </a>
                </li>
              </ul>
              {/* extra pages */}
            </nav>
          </div>
        </aside>
      </nav>
    </>
  );
}