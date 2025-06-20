import React from 'react';

const ManageProducts = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-500 to-purple-700 text-white font-sans">

      {/* Header */}
      <section className="flex flex-col justify-center items-center py-16">
        <h1 className="text-5xl font-bold mb-4">Manage Products</h1>
        <p className="max-w-2xl text-center text-lg">
          Add, edit or delete products easily. Keep your inventory updated!
        </p>
      </section>

      {/* Product List */}
      <section className="bg-white text-gray-800 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-5">

          <div className="bg-purple-300 rounded-lg shadow-lg p-8 hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold mb-2">Product A</h3>
            <p>Category: Electronics</p>
            <p className="my-2">$99.99</p>
            <div className="flex justify-center gap-4 mt-4">
              <button className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-800">Edit</button>
              <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-800">Delete</button>
            </div>
          </div>

          <div className="bg-purple-300 rounded-lg shadow-lg p-8 hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold mb-2">Product B</h3>
            <p>Category: Fashion</p>
            <p className="my-2">$49.99</p>
            <div className="flex justify-center gap-4 mt-4">
              <button className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-800">Edit</button>
              <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-800">Delete</button>
            </div>
          </div>

          <div className="bg-purple-300 rounded-lg shadow-lg p-8 hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold mb-2">Product C</h3>
            <p>Category: Home Decor</p>
            <p className="my-2">$29.99</p>
            <div className="flex justify-center gap-4 mt-4">
              <button className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-800">Edit</button>
              <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-800">Delete</button>
            </div>
          </div>

        </div>
      </section>

      {/* Add Product */}
      <section className="py-16 bg-gradient-to-b from-purple-700 to-purple-500 text-center">
        <h2 className="text-4xl font-bold mb-6">Add New Product</h2>
        <button className="bg-white text-purple-700 font-semibold py-3 px-8 rounded shadow-lg hover:bg-purple-300 hover:text-white transition-colors">
          Add Product
        </button>
      </section>

    </div>
  );
}

export default ManageProducts;
