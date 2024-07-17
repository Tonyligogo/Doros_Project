import Logo2 from "../assets/logo2.png";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const links = [
  { name: "Home", href: "#" },
  { name: "Flavours", href: "#flavours" },
  { name: "Product", href: "#product" },
  { name: "About Us", href: "#about" },
  { name: "Contact Us", href: "#contact" },
];
const about = [
  { name: "About Bacardi" },
  { name: "Contact Us" },
  { name: "Media" },
  { name: "Career" },
  { name: "FAQ" },
];

function Footer() {
  return (
    <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2  md:grid-cols-3 gap-6 items-center lg:grid-cols-4 py-6 px-4 border rounded-xl">
      <img src={Logo2} alt="kogo" className="h-32 lg:h-48 aspect-auto" />
      <ul className="flex flex-col gap-2">
        <li className="font-bold">ABOUT US</li>
        {about.map((item) => (
          <li key={item.name} className="">
            {item.name}
          </li>
        ))}
      </ul>
      <ul className="flex flex-col gap-2">
        <li className="font-bold">USEFUL LINKS</li>
        {links.map((link) => (
          <li key={link.name} className="">
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
      <div>
        <span className="block font-bold mb-1">STAY IN THE KNOW</span>
        <form className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Your email"
            className=" bg-transparent border border-gray-400 py-1 px-2 focus:outline outline-2 outline-offset-2 rounded-sm "
          />
          <button
            type="button"
            className="border border-gray-500 rounded-sm py-1"
          >
            Subscribe
          </button>
        </form>
        <span className="block mt-4 mb-2 text-sm">FOLLOW US ON:</span>
        <ul className="flex items-center gap-2">
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaFacebookF />
          </li>
          <li>
            <FaTwitter />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
