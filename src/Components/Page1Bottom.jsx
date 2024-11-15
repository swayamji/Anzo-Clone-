import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Page1Bottom = () => {
  useGSAP(function(){
    gsap.from('.GGG',{
      y:50,
      opacity:0,
      duration:1,
      delay:1.3,
    })
  })
  return (
        <>
          <div className='w-full h-[16vw] flex justify-between px-16 bottom-[0px] absolute max-md:top-[70vw] max-md:px-4 max-md:fixed'>
              <div className='GGG max-lg:text-[1.9vw] max-lg:mt-[6vw] mt-[10vw] text-[1.3vw] max-md:hidden'>
                  <h2 className='font-bold font-[anzo4]'>BRAND DESIGN | WEBSITE DESIGN</h2>
                  <h3 className='font-[anzo3] font-extralight text-gray-400 leading-6'>BESPOKE FREELANCE</h3>
              </div>
          </div>   

          <div className='hidden max-md:block max-md:absolute max-md:right-10 max-md:bottom-5'>
            <h2 className='text-[3vw] font-[anzo4]'>WEB AND BRAND</h2>
            <h3 className='text-[3vw] font-[anzo3] text-gray-200 font-thin'>BESPOKE FREELANCE</h3>
          </div>
        </>
      );
  };

export default Page1Bottom