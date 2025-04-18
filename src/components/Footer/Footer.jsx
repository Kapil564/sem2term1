import social from "../../assets/social.png";
import Instagram from "../../assets/instagram.png";
import Youtube from "../../assets/youtube.png";
import twitter from "../../assets/twitter.png";
import FaceBook from "../../assets/facebook.png";
import "./Footer.css";
import "tailwindcss";
export default function footer() {
  return (
    <footer>
    <div className="footer">
      <div className="usefullinks">
        <p>Useful Links</p>
        <ul className="links">
          <a href="https://www.instagram.com/">
            <img src={Instagram} alt="Instagram" className="h-8 w-8" />
          </a>
          <a href="https://x.com/">
            <img className="h-8 w-8" src={FaceBook} alt="Facebook" />
          </a>
          <a href="https://www.youtube.com/">
            <img src={Youtube} alt="Youtube" className="h-7 w-8" />
          </a>
          <a href="https://x.com/?lang=en">
            <img src={twitter} alt="X" className="h-8 w-8" />
          </a>
          <a href="https://in.linkedin.com/">
            <img src={social} alt="Linkedin" className="h-8 w-8" />
          </a>
        </ul>
      </div>
      <div className=" newsletter flex flex-col gap-2 p-4 ">
        <label className="text-lg font-semibold text-gray-700">
          Subscribe our newsletter:
        </label>
        <div className="flex w-100  focus:outline-none gap-2">
          <input
            type="email"
            placeholder="type your mail here"
            className="px-4 outline-none py-2 border w-100 border-black-300 rounded-xl focus:outline-none "
          />
        </div>
        <div className="flex justify-center mb-20">
          <button className="subscibe_button bg-gray-500 w-40 h-10 text-white   flex justify-center items-center px-6 py-1 rounded-xl hover:bg-gray-700 cursor-pointer transition-colors duration-200">
            Subscribe now
          </button>
        </div>
      </div>
      <div className="Address p-4">
        <label>Address :</label>
        <p className="text-gray-600 leading-relaxed">
          14, 3rd cross, Parappana Agrahar, Electronic City Rd,
          <br />
          Electronics City Phase 1, Electronic City, Bengaluru,
          <br />
          Karnataka 560100
        </p>
      </div>
    </div>
    <div className=" terms mt-8  border-t border-gray-200 dark:border-gray-700 pt-8">
          <p className="text-center text-gray-500 dark:text-gray-400">
            © 2024 Your Company. All rights reserved.
          </p>
    </div>
    </footer>
  );
}
