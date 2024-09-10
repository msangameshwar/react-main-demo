/* eslint-disable react/prop-types */

const Navbar = ({ toggleForm, showLogin }) => {
  return (
    <nav className='navbar navbar-expand-lg'>
      <div className='container-fluid'>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarContent' aria-controls='navbarContent' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarContent'>
          {/* <div className='navbar-nav'>
            <a className='nav-link active' aria-current='page' href='#'>
              Home
            </a>
            <a className='nav-link' href='#'>
              Features
            </a>
            <a className='nav-link' href='#'>
              Pricing
            </a>
           
          </div> */}
          <div className='d-flex ms-auto'>
            <button className='btn btn-primary toggle' onClick={toggleForm}>
              {showLogin ? 'Register' : 'Log In'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
