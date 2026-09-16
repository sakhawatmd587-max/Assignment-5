import { FaArrowRight, FaBookOpen } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-b from-white to-violet-50"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 md:grid-cols-2">

        {/* Left Side */}
        <div>
          <p className="mb-4 font-medium text-violet-600">
            Build smarter. Learn faster.
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            Build Your Ideal
            <br />

            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mb-8 max-w-xl leading-7 text-slate-600">
            Explore modern technologies, discover powerful tools, and build
            your own personalized development stack.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#technologies"
              className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-5 py-3 font-medium text-white"
            >
              Explore Technologies
              <FaArrowRight />
            </a>

            <button className="flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 font-medium">
              <FaBookOpen />
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <div className="rounded-3xl bg-gradient-to-br from-violet-200 via-pink-100 to-orange-100 p-8 shadow-xl">
            <img
              className="w-full max-w-md"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="Development Stack"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;