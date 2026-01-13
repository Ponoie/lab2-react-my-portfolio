const Project = () => {
  // ข้อมูลจำลอง (Mock Data)
  const projectList = [
    {
      id: 1,
      title: "Enterprise Chat Application",
      desc: "Real-time messaging with WebSocket",
      icon: "💬",
      tech: [
        "Flutter",
        "WebSocket",
        "NestJs",
        "PostgreSQL",
        "Firebase",
        "JWT Encryption",
      ],
    },
    {
      id: 2,
      title: "IoT Dashboard",
      desc: "Real-time monitoring using MQTT & Grafana",
      icon: "📊",
      tech: ["MQTT", "Grafana", "IoT"],
    },
    {
      id: 3,
      title: "HRM System Application",
      desc: "Employee management system",
      icon: "👥",
      tech: ["Flutter", "Firebase", "Tailwind", "NestJs", "PostgreSQL"],
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 text-blue-600 dark:text-blue-400">
          My Projects
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Explore my latest projects and see what I've been working on
        </p>
      </div>

      {/* Responsive Grid: Mobile=1, Tablet=2, PC=3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projectList.map((project) => (
          <div
            key={project.id}
            className="group relative h-full rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
          >
            {/* Card Container */}
            <div className="relative h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden flex flex-col">
              {/* Top Accent Bar */}
              <div className="h-1 w-full bg-blue-600"></div>

              {/* Icon Section */}
              <div className="px-6 pt-8 pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-3xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                  {project.icon}
                </div>
              </div>

              {/* Content Section */}
              <div className="px-6 pb-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-semibold bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <button className="w-full py-3 px-4 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transform transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group/btn">
                  <span>View Project</span>
                  <span className="transform group-hover/btn:translate-x-1 transition-transform">
                    →
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-16">
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Want to see more?
        </p>
        <button className="px-8 py-3 rounded-lg font-semibold bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white transition-all duration-300 hover:shadow-lg">
          View All Projects
        </button>
      </div>
    </div>
  );
};

export default Project;
