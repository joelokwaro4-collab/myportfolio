// Projects.jsx

function Projects() {
  return (
    <div className="bg-black px-6 py-20">

      <h1 className="text-center text-4xl sm:text-5xl md:text-7xl font-serif text-white mb-20">
        MY PROJECTS
      </h1>

      {/* PROJECT CARDS */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div className="bg-gray-300 rounded-3xl h-[500px] shadow-lg"></div>

        <div className="bg-gray-300 rounded-3xl h-[500px] shadow-lg"></div>

        <div className="bg-gray-300 rounded-3xl h-[500px] shadow-lg"></div>

      </div>

      {/* DESCRIPTION BOX */}
      <div className="max-w-7xl mx-auto mt-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl p-10 md:p-16">

        <p className="text-lg md:text-2xl text-center text-white leading-relaxed">
          I am a passionate software developer specializing in building modern
          websites, web applications, and mobile apps that are fast,
          responsive, and user-friendly. I focus on creating clean designs,
          efficient systems, and scalable digital solutions that help businesses
          and individuals grow online.
        </p>

      </div>
    </div>
  );
}

export default Projects;