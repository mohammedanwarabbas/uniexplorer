import React, {useState,useEffect} from 'react';
import {Link,useLocation} from 'react-router-dom';

function Navbar() {
  const [activeMenuItem, setActiveMenuItem] = useState('home');
  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
    // You can perform additional actions here if needed
  };
  const location = useLocation();

  useEffect(() => {
    // Extract the current path from the location object
    const currentPath = location.pathname;

    // Map the current path to the corresponding menu item
    const menuItems = {
      '/home': 'home',
      '/about': 'about',
    };

    // Set the active menu item based on the current path
    setActiveMenuItem(menuItems[currentPath] || 'home');
    const navbarCollapse = document.getElementById('navbarNav');
    navbarCollapse.classList.remove('show');
  }, [location.pathname]);
  return (
<nav className="my-4 container navbar navbar-expand-lg navbar-light bg-light rounded-pill">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#"><b>U</b>ni-<b>E</b>xplorer</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded='false' aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">

        <li className='nav-item'>
          <Link className={`nav-link ${activeMenuItem === 'home' ? 'active' : ''}`} to="/" onClick={() => handleMenuItemClick('home')}>Home</Link>
        </li>
        <li className='nav-item' onClick={() => handleMenuItemClick('about')}>
          <Link className={`nav-link ${activeMenuItem === 'about' ? 'active' : ''}`} to="/about">About</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar;