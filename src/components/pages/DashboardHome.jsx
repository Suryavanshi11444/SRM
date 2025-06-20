import React from 'react';

const DashboardHome = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-500 to-purple-700 text-white font-sans">

      {/* Header */}
      <section className="flex flex-col justify-center items-center py-16">
        <h1 className="text-5xl font-bold mb-4">Admin Dashboard</h1>
        <p className="max-w-2xl text-center text-lg">
          Welcome Admin! Manage everything from one place efficiently and easily.
        </p>
      </section>

      {/* Quick Stats Section */}
      <section className="bg-white text-gray-800 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-5">
          
          <div className="bg-purple-300 rounded-lg shadow-lg p-8 text-center hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold mb-2">Total Orders</h3>
            <p className="text-4xl font-bold">1,245</p>
          </div>

          <div className="bg-purple-300 rounded-lg shadow-lg p-8 text-center hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold mb-2">Total Users</h3>
            <p className="text-4xl font-bold">320</p>
          </div>

          <div className="bg-purple-300 rounded-lg shadow-lg p-8 text-center hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold mb-2">Revenue</h3>
            <p className="text-4xl font-bold">$56,300</p>
          </div>

        </div>
      </section>

      {/* Admin Actions */}
      <section className="py-16 bg-gradient-to-b from-purple-700 to-purple-500">
        <div className="max-w-4xl mx-auto bg-white text-gray-800 p-10 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-8 text-center">Quick Actions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <button className="bg-purple-600 text-white font-semibold py-4 rounded hover:bg-purple-800 transition-colors">
              Manage Orders
            </button>
            <button className="bg-purple-600 text-white font-semibold py-4 rounded hover:bg-purple-800 transition-colors">
              Manage Products
            </button>
            <button className="bg-purple-600 text-white font-semibold py-4 rounded hover:bg-purple-800 transition-colors">
              Manage Users
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

export default DashboardHome;
