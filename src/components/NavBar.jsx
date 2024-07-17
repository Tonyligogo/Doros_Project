import Logo from "../assets/logo.jpg";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const links=[
    {name:'Home', href:'#'},
    {name:'Flavours', href:'#flavours'},
    {name:'Drinks', href:'#product'},
    {name:'About Us', href:'#about'},
    {name:'Contact Us', href:'#contact'},
]
function NavBar() {
    const [openMenu, setOpenMenu] = useState(true);

  return (
    <nav className="bg-white md:flex md:items-center md:justify-between px-4 w-full h-16 z-50 fixed top-0 left-0 shadow-sm">
      <div className="flex justify-between items-center bg-white">
        <img src={Logo} alt="Logo" className="w-28 aspect-auto" />
        <span  onClick={()=>setOpenMenu(prev=>!prev)}>
            {openMenu ? 
            <IoMenu className="block cursor-pointer md:hidden h-6 w-6"/> 
            : 
            <IoMdClose className="block cursor-pointer md:hidden h-6 w-6"/>
            }
        </span>
      </div>
      <ul className={`${!openMenu ? 'top-[62px] opacity-100' :'top-[-400px]'} md:flex md:items-center md:gap-6 z-[-1] md:z-auto md:static absolute bg-white w-full
      md:w-auto md:opacity-100 opacity-0 transition-all ease-in duration-500`}>
        {links.map((link)=>(
            <li key={link.name} onClick={()=>setOpenMenu(true)} className="my-6 ml-6 md:my-0">
              <a href={link.href}>{link.name}</a>
            </li>
        ))}
      </ul>
      <button className="hidden md:block py-1 px-4 border border-gray-500 rounded-sm">
        Shop now
      </button>
    </nav>
  );
}

export default NavBar;
