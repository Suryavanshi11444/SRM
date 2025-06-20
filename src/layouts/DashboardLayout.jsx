import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-12 min-h-screen">

      {/* Sidebar */}
      <div className="col-span-2 bg-gradient-to-b from-purple-600 to-purple-800 text-white text-xl p-5">
        <div className="mb-6 font-bold text-2xl text-center">Admin Panel</div>
        <div className="mb-4 hover:bg-purple-700 rounded p-2 transition">
          <Link to="/dashboard">Dashboard Home</Link>
        </div>
        <div className="mb-4 hover:bg-purple-700 rounded p-2 transition">
          <Link to="/dashboard/manage-products">Manage Products</Link>
        </div>
        <div className="hover:bg-purple-700 rounded p-2 transition">
          <Link to="/">Back to Store</Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="col-span-10 bg-purple-100 p-5">
        <Outlet />
      </div>

    </div>
  );
}

export default DashboardLayout;
