import { useState } from "react"
import Breezer from '../assets/breezer6.jpg'
import Lemon from '../assets/lemon.jpg'

function About() {
    const [open, setOpen]= useState(false);
    const [id, setId]= useState('');
    const handleClick = (e,num) => {
        e.preventDefault();
        if(num !== id ){
            setOpen(false)
        }
       setOpen(prev=>!prev)
       setId(num)
    }
  return (
    <div id="about" className="mb-10 scroll-mt-[64px]">
        <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 pl-7">
            <h1 className="font-bold text-3xl mb-4">About Us</h1>
            <p className="text-gray-700">Bacardi Breezer, Breezer for short, is a fruit-based alcoholic drink which comes in many flavours.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4">
            <img src={Breezer} alt="" className="w-3/4 justify-self-center"/>
            <section className="w-3/4 mt-10 flex justify-self-center flex-col gap-4">
            <div>
                <button onClick={(e)=>handleClick(e,1)} className="flex justify-between w-full border-b-2 border-black mb-4">
                    We Bacardi{open && id===1 ? <span>-</span> : <span>+</span>}
                </button>
                <div className={`grid overflow-hidden transition-all duration-500 ease-in-out text-slate-600 text-sm ${open && id===1 ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <p className="overflow-hidden">BACARDI 1 is a rum brand established in 1862 that has been producing world-class rums since. Our history is rich, and hunger for continued innovation in the industry never ceases.</p>
                </div>
            </div>
            <div>
                <button onClick={(e)=>handleClick(e,2)} className="flex justify-between w-full border-b-2 border-black mb-4">
                    Our Product{open && id===2 ? <span>-</span> : <span>+</span>}
                </button>
                <div className={`grid overflow-hidden transition-all duration-500 ease-in-out text-slate-600 text-sm ${open && id===2 ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <p className="overflow-hidden">BACARDI 2 is a rum brand established in 1862 that has been producing world-class rums since. Our history is rich, and hunger for continued innovation in the industry never ceases.</p>
                </div>
            </div>
            <div>
                <button onClick={(e)=>handleClick(e,3)} className="flex justify-between w-full border-b-2 border-black mb-4">
                    How we work{open && id===3 ? <span>-</span> : <span>+</span>}
                </button>
                <div className={`grid overflow-hidden transition-all duration-500 ease-in-out text-slate-600 text-sm ${open && id===3 ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <p className="overflow-hidden">BACARDI 3 is a rum brand established in 1862 that has been producing world-class rums since. Our history is rich, and hunger for continued innovation in the industry never ceases.</p>
                </div>
            </div>
            <div>
                <button onClick={(e)=>handleClick(e,4)} className="flex justify-between w-full border-b-2 border-black mb-4">
                    Our Business{open && id===4 ? <span>-</span> : <span>+</span>}
                </button>
                <div className={`grid overflow-hidden transition-all duration-500 ease-in-out text-slate-600 text-sm ${open && id===4 ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <p className="overflow-hidden">BACARDI 4 is a rum brand established in 1862 that has been producing world-class rums since. Our history is rich, and hunger for continued innovation in the industry never ceases.</p>
                </div>
            </div>
            <div>
                <button onClick={(e)=>handleClick(e,5)} className="flex justify-between w-full border-b-2 border-black mb-4">
                    Contact Us{open && id===5 ? <span>-</span> : <span>+</span>}
                </button>
                <div className={`grid overflow-hidden transition-all duration-500 ease-in-out text-slate-600 text-sm ${open && id===5 ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <p className="overflow-hidden">BACARDI 5 is a rum brand established in 1862 that has been producing world-class rums since. Our history is rich, and hunger for continued innovation in the industry never ceases.</p>
                </div>
            </div>
            </section>
            
        </div>
        <div>
            <img src={Lemon} alt="" className="w-36"/>
        </div>
    </div>
  )
}

export default About