import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Dashboard = () => (
    <div className="dashboard">
        <Link className="link-item" to='/lazydemo'>Lazy Demo</Link>
        <Link className="link-item" to='countdown'>Count Down Demo</Link>
    </div>
)

export default Dashboard;