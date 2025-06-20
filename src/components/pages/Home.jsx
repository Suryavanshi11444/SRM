import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-500 to-purple-700 text-white font-sans">

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Ecommerce Store!</h1>
        <p className="max-w-2xl text-lg">
          Discover amazing products, great deals, and enjoy the best shopping experience.
        </p>
        <button className="mt-8 bg-white text-purple-700 font-semibold py-3 px-6 rounded shadow-lg hover:bg-purple-300 hover:text-white transition-colors">
          Shop Now
        </button>
      </section>

      {/* Features Section */}
      <section className="bg-white text-gray-800 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-5">
          
          <div className="bg-purple-300 rounded-lg shadow-lg p-8 text-center hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold mb-2">Wide Selection</h3>
            <p>Choose from a wide range of top-quality products across multiple categories.</p>
          </div>

          <div className="bg-purple-300 rounded-lg shadow-lg p-8 text-center hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold mb-2">Secure Payment</h3>
            <p>We offer secure payment methods ensuring full safety for your transactions.</p>
          </div>

          <div className="bg-purple-300 rounded-lg shadow-lg p-8 text-center hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold mb-2">Fast Delivery</h3>
            <p>Enjoy fast and reliable delivery straight to your doorstep.</p>
          </div>

        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-b from-purple-700 to-purple-500 text-center">
        <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
        <p className="max-w-3xl mx-auto text-lg mb-8">
          Become a member and enjoy exclusive deals, early access to sales, and much more!
        </p>
        <button className="bg-white text-purple-700 font-semibold py-3 px-8 rounded shadow-lg hover:bg-purple-300 hover:text-white transition-colors">
          Sign Up
        </button>
      </section>

    </div>
  );
}

export default Home;
