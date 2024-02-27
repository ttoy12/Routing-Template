import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <Link to="/" className='nav-link'>Dashboard</Link>
                </li>
                <li className='nav-item'>
                    <Link to="/Users" className='nav-link'>Users</Link>
                </li>
                <li className='nav-item'>
                    <Link to="/Inventory" className='nav-link'>Inventory</Link>
                </li>
                <li className='nav-item'>
                    <Link to="/AuditLog" className='nav-link'>Audit Log</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;