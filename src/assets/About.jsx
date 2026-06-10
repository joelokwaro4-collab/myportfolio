// About.jsx

function About() {
  return (
    <>
      {/* TITLE */}
      <div className="bg-black">
        <h1 className="text-center text-4xl sm:text-5xl md:text-7xl pt-20 font-serif text-white pb-16">
          ABOUT ME
        </h1>
      </div>

      {/* CONTENT */}
      <div className="bg-black pb-20 px-6">
        <section className="max-w-7xl mx-auto bg-white rounded-3xl shadow-lg flex flex-col lg:flex-row items-center gap-10 p-8 md:p-14">

          {/* IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              className="w-full max-w-md rounded-3xl object-cover"
              src="public/bout.jpeg"
              alt="About"
            />
          </div>

          {/* TEXT */}
          <div className="w-full lg:w-1/2">
            <h1 className="font-bold text-3xl md:text-5xl mb-8">
              Creative Developer & Designer
            </h1>

            <p className="text-lg md:text-xl leading-relaxed mb-6 text-gray-700">
              I'm a passionate developer with over 3 years of experience creating
              beautiful and functional web applications. I specialize in modern
              JavaScript frameworks and responsive design.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-gray-600">
              My goal is to build products that not only look great but also
              provide exceptional user experiences. I believe in clean code,
              continuous learning, and pushing the boundaries of web technology.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">

              <div className="h-36 bg-gray-200 rounded-3xl flex flex-col justify-center items-center">
                <h4 className="text-3xl font-bold">50+</h4>
                <p className="text-lg">Projects</p>
              </div>

              <div className="h-36 bg-gray-200 rounded-3xl flex flex-col justify-center items-center">
                <h4 className="text-3xl font-bold">30+</h4>
                <p className="text-lg">Clients</p>
              </div>

              <div className="h-36 bg-gray-200 rounded-3xl flex flex-col justify-center items-center">
                <h4 className="text-3xl font-bold">3+</h4>
                <p className="text-lg">Years</p>
              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;