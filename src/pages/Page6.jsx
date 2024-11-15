import React from 'react'

const page6 = () => {
  return (
    <div className=' bg-white h-screen p-5 relative'>
        <div className='h-[50vw] overflow-hidden w-full bg-black rounded-[50px]'>
            <video autoPlay muted loop className='object-cover  h-full w-full z-10' src="https://video.wixstatic.com/video/11062b_92619c730c4b4b0bb27ea39c4276a52b/1080p/mp4/file.mp4"></video>
            <h1 className='absolute font-[anzo5] text-white top-16 left-32 text-[40vw]'>ABOUT</h1>
        </div>
    </div>
  )
}

export default page6