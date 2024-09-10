/* eslint-disable react/prop-types */

const Navbar = ({ toggleForm, showLogin }) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
          <button className="btn btn-primary me-2 toggle" onClick={toggleForm}>
            {showLogin ? 'Register' : 'Log In'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
