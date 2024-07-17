import Blueberry from '../assets/blueberry.webp'
import Blackberry from '../assets/blackberry.webp'
import Jamaican from '../assets/jamaican.webp'
// import Cranberry from '../assets/cranberry.webp'
import Passion from '../assets/passion.webp'
import { GrLinkNext } from "react-icons/gr";

const products = [
  {url:Blueberry,desc:'Blueberry Flavour'},
  {url:Blackberry,desc:'Blackberry Flavour'},
  {url:Jamaican,desc:'Jamaican Passion Flavour'},
  // {url:Lemon,title:'Bacardi Breezer',desc:'Lemon Flavour',size:'275ml',price:'Ksh 330'},
  // {url:Cranberry,title:'Bacardi Breezer',desc:'Cranberry Flavour',size:'275ml',price:'Ksh 330'},
  {url:Passion,desc:'Passion Flavour'},
];
function Flavours() {
  return (
    <div id='flavours' className='mb-16 scroll-mt-[64px]'>
        <div className="w-full sm:w-full md:w-1/2 pl-7 mb-16">
            <h1 className="font-bold text-3xl mb-4">Breezer Flavour</h1>
            <p className="text-gray-700">Bacardi Breezer, Breezer for short, is a fruit-based alcoholic drink which comes in many flavours.</p>
        </div>
    <div className="grid grid-cols-[1, auto] sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-5 gap-6 pl-7 items-center justify-center">
      {products.map((product)=>(
        <div key={product.url} className="border grid justify-items-center rounded-md py-4">
          <img src={product.url} className="h-56 grid aspect-auto"/>
          <span className="block mt-4">{product.desc}</span>
        </div>
      ))}
      <button className="flex justify-center items-center">
        <span className="border border-gray-900 grid items-center justify-center h-20 w-20 rounded-full">View all</span>
        <span className="ml-[-5px]"><GrLinkNext/></span>
        </button>
    </div>
    </div>
  )
}

export default Flavours