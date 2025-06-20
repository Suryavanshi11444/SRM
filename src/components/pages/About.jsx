import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-500 to-purple-700 text-white font-sans">

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center py-20">
        <h1 className="text-5xl font-bold mb-4">About Our Store</h1>
        <p className="max-w-2xl text-center text-lg">
          Welcome to our ecommerce platform where we bring you the finest products with best quality and services.
        </p>
      </section>

      {/* Features Section */}
      <section className="bg-white text-gray-800 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-5">
          
          {/* Box 1 */}
          <div className="bg-purple-300 rounded-lg shadow-lg p-8 hover:scale-105 transition-transform">
            <img src="https://via.placeholder.com/100" alt="Quality" className="mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2 text-center">Top Quality</h3>
            <p className="text-center">We ensure premium quality on every product we sell with strict quality checks.</p>
          </div>

          {/* Box 2 */}
          <div className="bg-purple-300 rounded-lg shadow-lg p-8 hover:scale-105 transition-transform">
            <img src="https://via.placeholder.com/100" alt="Support" className="mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2 text-center">24/7 Support</h3>
            <p className="text-center">Our support team is available around the clock to assist you anytime you need.</p>
          </div>

          {/* Box 3 */}
          <div className="bg-purple-300 rounded-lg shadow-lg p-8 hover:scale-105 transition-transform">
            <img src="https://via.placeholder.com/100" alt="Fast Delivery" className="mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2 text-center">Fast Delivery</h3>
            <p className="text-center">Get your products delivered at your doorstep within the promised time frame.</p>
          </div>

        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-purple-700 to-purple-500">
        <h2 className="text-4xl font-bold text-center mb-10">Meet Our Team</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-5">
          
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 text-center">
            <img src="https://via.placeholder.com/150" alt="Founder" className="mx-auto rounded-full mb-4" />
            <h3 className="text-2xl font-semibold">John Doe</h3>
            <p>Founder & CEO</p>
          </div>

          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 text-center">
            <img src="https://via.placeholder.com/150" alt="Manager" className="mx-auto rounded-full mb-4" />
            <h3 className="text-2xl font-semibold">Jane Smith</h3>
            <p>Operations Manager</p>
          </div>

          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 text-center">
            <img src="https://via.placeholder.com/150" alt="Support Head" className="mx-auto rounded-full mb-4" />
            <h3 className="text-2xl font-semibold">David Lee</h3>
            <p>Support Head</p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default About;
