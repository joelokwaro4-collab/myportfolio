// Contacts.jsx

function Contacts() {
  return (
    <section className="flex justify-center items-center bg-[#826afb] min-h-screen px-6 py-20">

      <form className="w-full max-w-2xl bg-white p-8 md:p-12 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.2)]">

        <h1 className="text-3xl md:text-4xl text-center font-bold mb-10">
          Contact Form
        </h1>

        {/* NAME */}
        <div className="mb-6">
          <label className="block mb-2 font-medium">
            Full Name
          </label>

          <input
            type="text"
            className="w-full h-14 border-2 border-gray-300 outline-none rounded-lg px-4 text-base focus:border-[#826afb]"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* EMAIL */}
        <div className="mb-6">
          <label className="block mb-2 font-medium">
            Email Address
          </label>

          <input
            type="email"
            className="w-full h-14 border-2 border-gray-300 outline-none rounded-lg px-4 text-base focus:border-[#826afb]"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* MESSAGE */}
        <div className="mb-6">
          <label className="block mb-2 font-medium">
            Message
          </label>

          <textarea
            className="w-full h-52 border-2 border-gray-300 outline-none rounded-lg p-4 text-base resize-none focus:border-[#826afb]"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>

        {/* BUTTON */}
        <button
          className="w-full h-14 bg-[#826afb] rounded-lg text-white font-semibold hover:bg-[#624ec6] transition duration-300"
          type="submit"
        >
          Send Message
        </button>

      </form>
    </section>
  );
}

export default Contacts;