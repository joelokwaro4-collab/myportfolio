// Skills.jsx

function Skills() {
  return (
    <>
      <div className="bg-black px-6 py-20">
        
        <h1 className="text-center text-4xl sm:text-5xl md:text-7xl font-serif text-white mb-20">
          MY SKILLS
        </h1>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-white rounded-3xl p-10 text-center shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Frontend</h2>
            <p className="text-gray-700 leading-relaxed">
              HTML, CSS, Tailwind CSS, JavaScript, React.js
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 text-center shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Backend</h2>
            <p className="text-gray-700 leading-relaxed">
              Node.js, Express.js, APIs, MongoDB
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 text-center shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Mobile Apps</h2>
            <p className="text-gray-700 leading-relaxed">
              React Native, Responsive Design, UI/UX
            </p>
          </div>

        </div>
      </div>
    </>
  );
}

export default Skills;