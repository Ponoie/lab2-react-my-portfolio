const Contact = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 text-blue-600 dark:text-blue-400">
          Get in Touch
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          I'd love to hear from you. Feel free to reach out with any questions
          or opportunities.
        </p>
      </div>

      {/* Contact Info Grid (3 Columns on PC) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
        {/* Email Card */}
        <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
          <div className="relative h-full bg-white dark:bg-gray-800 rounded-2xl p-8 flex flex-col items-center text-center">
            <div className="h-1 w-full bg-blue-600 absolute top-0 left-0"></div>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-2xl text-4xl mb-4 group-hover:scale-110 transition-transform">
              📧
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Email
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              pond.pannawich@gmail.com
            </p>
          </div>
        </div>

        {/* Phone Card */}
        <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
          <div className="relative h-full bg-white dark:bg-gray-800 rounded-2xl p-8 flex flex-col items-center text-center">
            <div className="h-1 w-full bg-blue-600 absolute top-0 left-0"></div>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-2xl text-4xl mb-4 group-hover:scale-110 transition-transform">
              📱
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Phone
            </h3>
            <p className="text-gray-600 dark:text-gray-400">+66 90 925 2976</p>
          </div>
        </div>

        {/* Location Card */}
        <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
          <div className="relative h-full bg-white dark:bg-gray-800 rounded-2xl p-8 flex flex-col items-center text-center">
            <div className="h-1 w-full bg-blue-600 absolute top-0 left-0"></div>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-2xl text-4xl mb-4 group-hover:scale-110 transition-transform">
              📍
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Location
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Bangkok, Thailand
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-2xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          {/* Form Header */}
          <div className="h-1 w-full bg-blue-600"></div>
          <div className="p-8 md:p-10">
            <h3 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
              Send a Message
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              I'll get back to you as soon as possible.
            </p>

            <form className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="What is this about?"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                />
              </div>

              {/* Message */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Your message here..."
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105">
                Send Message →
              </button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Or connect with me on social media
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
            >
              f
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
            >
              𝕏
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
            >
              in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
