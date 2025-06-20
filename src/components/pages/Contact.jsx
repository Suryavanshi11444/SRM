import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-500 to-purple-700 text-white font-sans">

      {/* Header */}
      <section className="flex flex-col justify-center items-center py-16">
        <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
        <p className="max-w-2xl text-center text-lg">
          We would love to hear from you. Feel free to reach out anytime!
        </p>
      </section>

      {/* Contact Info Section */}
      <section className="bg-white text-gray-800 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-5">
          
          {/* Address */}
          <div className="bg-purple-300 rounded-lg shadow-lg p-8 text-center hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold mb-2">Address</h3>
            <p>123 Main Street<br />City, Country</p>
          </div>

          {/* Phone */}
          <div className="bg-purple-300 rounded-lg shadow-lg p-8 text-center hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold mb-2">Phone</h3>
            <p>+1 234 567 8900</p>
          </div>

          {/* Email */}
          <div className="bg-purple-300 rounded-lg shadow-lg p-8 text-center hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold mb-2">Email</h3>
            <p>contact@company.com</p>
          </div>

        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gradient-to-b from-purple-700 to-purple-500">
        <div className="max-w-4xl mx-auto bg-white text-gray-800 p-10 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-8 text-center">Send Us a Message</h2>
          
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="border border-gray-300 rounded p-3"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="border border-gray-300 rounded p-3"
            />
            <input 
              type="text" 
              placeholder="Subject" 
              className="md:col-span-2 border border-gray-300 rounded p-3"
            />
            <textarea 
              rows="5" 
              placeholder="Your Message" 
              className="md:col-span-2 border border-gray-300 rounded p-3"
            />
            <button 
              type="submit" 
              className="md:col-span-2 bg-purple-600 text-white font-semibold py-3 rounded hover:bg-purple-800 transition-colors"
            >
              Send Message
            </button>
          </form>

        </div>
      </section>

    </div>
  );
}

export default Contact;
