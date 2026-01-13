import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4 py-10">
        <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400">
          Hi, I'm Pannawich Wontien 👋
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Fullstack Developer
        </p>
        <Link
          to="/project"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
        >
          View My Work
        </Link>
      </section>

      {/* 3 Columns Section (Skills) */}
      <section>
        <h3 className="text-2xl font-bold mb-6 border-l-4 border-blue-500 pl-3">
          My Expertise
        </h3>

        {/* ตรงนี้คือ Grid System ที่คุณต้องการ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md">
            <h4 className="font-bold text-lg mb-2">Frontend</h4>
            <p className="text-gray-600 dark:text-gray-400">
              React, Next.js, Tailwind CSS, Angular, Flutter
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md">
            <h4 className="font-bold text-lg mb-2">Backend & DevOps</h4>
            <p className="text-gray-600 dark:text-gray-400">
              Node.js, Docker, AWS
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
