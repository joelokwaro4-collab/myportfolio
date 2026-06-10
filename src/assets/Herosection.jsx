
// Herosection.jsx

function Herosection() {
  return (
    <section className="bg-black text-white min-h-screen pt-28 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          
          {/* Profile Image */}
          <img
            className="w-32 h-32 rounded-full mx-auto md:mx-0 mb-8 object-cover border-4 border-white"
            src="public/jo.jpeg"
            alt="Joel"
          />

          {/* Text Content */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
            Full Stack Developer
          </h1>

          <h3 className="text-xl sm:text-2xl md:text-3xl mt-4 text-gray-300">
            Mobile App Builder
          </h3>

          <p className="mt-6 text-base sm:text-lg font-semibold leading-relaxed">
            Discover my projects, skills, and experience. A home for greatness.
          </p>

          <p className="mt-4 text-gray-400 leading-relaxed">
            Very passionate in tech careers and eager to learn so as to conquer
            the tech world.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center md:justify-start">
            
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition">
              Learn More
            </button>

            <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition">
              Contact Me
            </button>

            <button className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-lg font-semibold transition text-black">
              View Projects
            </button>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            className="w-full max-w-md md:max-w-xl object-contain"
            src="public/ChatGPT Image May 15, 2026, 08_44_23 AM.png"
            alt="Desktop Setup"
          />
        </div>
      </div>
    </section>
  );
}

export default Herosection;