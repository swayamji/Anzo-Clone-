import React from 'react'

const Page3 = () => {
  return (
    <>
    <div className='h-screen max-md:h-[70vw] relative flex justify-center items-center bg-white'>
        <img className='absolute z-20 w-[65vw] max-md:top-[12vw]' src="https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_1256,h_722,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/try.png" alt="" />
        <video autoPlay loop muted className='h-[35vw] w-[50vw] object-cover relative z-10 max-md:mt-[-10vw]' src="https://video.wixstatic.com/video/f1c650_ec0546cb7b10485c8753983f298c6ea4/360p/mp4/file.mp4"></video>
        <div className='h-0.5 w-7/12 top-[40%] absolute z-0 bg-black max-md:top-[20vw]'></div>
        <div className='h-0.5 w-9/12 top-[53%] absolute z-0 bg-black max-md:top-[30vw]'></div>
        <div className='h-0.5 w-11/12 top-[70%] absolute z-0 bg-black max-md:top-[40vw]'></div>
    </div>
  
    </>
  )
}

export default Page3