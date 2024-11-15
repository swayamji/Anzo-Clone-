import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import 'remixicon/fonts/remixicon.css'

export const Header = () => {
  useGSAP(function(){
    gsap.to('button',{
      scale:1.05,
      repeat:-1,
      duration:0.4,
      yoyo: true,        // Reverse the animation back to original size
      ease: "power1.inOut" 
    }),
      gsap.to('.Hello img',{
        rotate:360,
        duration:5,
        repeat:-1,
        ease:'linear'
      })
  },[])
  return (
   <>
        <div className='fixed w-full flex items-center justify-end z-10 max-md:px-2 px-16 py-24 max-lg:p-14'>
            <button className='bg-black px-10 max-md:mt-[600px] max-md:text-[2.7vw] max-md:border-[4px] border-[5px] py-2.5 rounded-full select-none text-white font-[anzo] relative hover:bg-gray-400'>Hire me</button>
            <i className="max-md:opacity-0 ri-more-2-line text-4xl text-gray-600"></i>
        </div>
        <div className='Hello fixed z-10 bottom-14 right-14 max-lg:mt-[-100px] max-lg:space-y-6 space-y-8 max-md:top-80 max-md:left-10'>
                <img className='max-md:w-[12vw] relative max-lg:w-[9vw] w-[5.2vw]' src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_101,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cssda-wotd-white.png" alt="" />
                <img className='max-md:w-[12vw] relative max-lg:w-[9vw] w-[5.2vw]' src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_101,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EN_legend_large.png" alt="" />
            </div>

        <div className="hidden max-md:block max-md:absolute max-md:right-10 max-md:top-12 max-md:text-white max-md:z-50 max-md:font-[anzo5]">
        <i className="ri-menu-3-line text-[8vw] cursor-pointer"></i>
          <h2 className='text-[10vw]'>HELLO</h2>
      </div>

   </>
  )
}

