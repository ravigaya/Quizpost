import React from 'react';

 export function Nav() {
  return (
    <div className="sidenav bg-yellow">
      <h2 className="text-center py-4">Admin Menu</h2>
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link" href="#">Dashboard</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Users</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Settings</a>
        </li>
      </ul>
    </div>
  );
}

// export default SideNav;
