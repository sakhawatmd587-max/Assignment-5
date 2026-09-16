import {
  FaGithub,
  FaTwitter,
  FaLinkedin
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t bg-slate-900 text-slate-300">

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-4">

        <div>
          <h2 className="mb-4 text-2xl font-bold text-white">
            Dev
            <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-violet-400 bg-clip-text text-transparent">
              Stack
            </span>
          </h2>

          <p className="text-sm leading-6">
            Explore technologies and build your ideal development stack.
          </p>

          <div className="mt-5 flex gap-4 text-xl">
            <FaGithub />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-bold text-white">
            Product
          </h3>

          <div className="flex flex-col gap-2 text-sm">
            <a href="#technologies">Technologies</a>
            <a href="#projects">Projects</a>
            <a href="#about">Features</a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-bold text-white">
            Company
          </h3>

          <div className="flex flex-col gap-2 text-sm">
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#home">Careers</a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-bold text-white">
            Legal
          </h3>

          <div className="flex flex-col gap-2 text-sm">
            <a href="#home">Privacy</a>
            <a href="#home">Terms</a>
            <a href="#home">Cookies</a>
          </div>
        </div>

      </div>

      <div className="border-t border-slate-700 py-5 text-center text-sm">
       
      </div>

    </footer>
  );
};

export default Footer;