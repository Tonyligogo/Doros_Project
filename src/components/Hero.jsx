import Banner from '../assets/breezer10.jpg'
import Banner2 from '../assets/banner2.jpg'
import { useEffect, useState } from 'react';
function Hero() {
  const [newImage, setNewImage] = useState(false);
  const [screensize, setScreensize] = useState();
  useEffect(() => {
    const handleResize = () => setScreensize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (screensize <= 900) {
      setNewImage(true);
    } else {
      setNewImage(false);
    }
  }, [screensize, setNewImage]);

  return (
    <div id="#" className='my-16 scroll-mt-[64px]'>
        <img src={!newImage ? Banner : Banner2} alt="Banner image" />
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 my-12'>
          <div className='w-full grid justify-items-center pl-7'>
          <p className="text-gray-700 sm:w-full md:w-3/4">Bacardi Breezer, Breezer for short, is a fruit-based alcoholic drink which comes in many flavours.</p>
          </div>
          <div className='text-center px-7'>
            <ul className='flex gap-3 justify-center md:gap-6'>
              <li className='flex flex-col gap-2 items-center'>
                <span className='font-bold text-2xl md:text-4xl'>10+</span>
                <span className='text-sm text-center'>More than Flavours</span>
              </li>
              <li className='flex flex-col gap-2 items-center'>
                <span className='font-bold text-2xl md:text-4xl'>21+</span>
                <span className='text-sm text-center'>Year old can drink</span>
              </li>
              <li className='flex flex-col gap-2 items-center'>
                <span className='font-bold text-2xl md:text-4xl'>4%</span>
                <span className='text-sm text-center'>Alcohol content</span>
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Hero