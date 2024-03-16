import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className='flexCenter flex-col'>
      <div className='padding-container max-container w-full pb-24'>
        <Image 
          src='/camp.svg'
          alt='camp'
          width={50}
          height={50}
        />

        <p className='regular-18 -mt-1 mb-3 text-green-50'>
          Your Journey Starts Here
        </p>

        <div className='flex flex-wrap justify-between gap-5 lg:gap-10'>
          <h2 className='bold-40 lg:bold-64'>
            Guide you to the easy path
          </h2>

          <p className='regular-16 text-gray-30 xl:mx-w-[520px]'>
            Whether you're seeking solace in the serene embrace of nature or seeking exhilarating outdoor experiences, our dedicated team is here to guide you every step of the way. From immersive wildlife encounters to soul-nourishing hikes through ancient forests, Your Journey Starts Here promises a journey of self-discovery and renewal, where every moment is an opportunity to connect with the essence of the natural world and uncover the true spirit of adventure within.
          </p>
        </div>
      </div>

      <div className='flexCenter max-container relative w-full'>
        <Image 
          src='/boat.png'
          alt='boad'
          width={1440}
          height={580}
          className='w-full object-cover object-center 2xl:rounded-5xl '
        />

        <div className='absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20'>

          <Image 
            src={'/meter.svg'}
            alt='meter'
            width={16}
            height={158}
            className='h-full w-auto'
          />
          <div className='flexBetween flex-col'>
            <div className='flex w-full flex-col'>
              <div className='flexBetween w-full'>
                <p className='regular-16 text-gray-20'>Destination</p>

                <p className='bold-16 text-green-50'>48 min</p>
              </div>

              <p className='bold-20 mt-2'>Pine Creek Camp</p>
            </div>

            <div className='flex w-full flex-col'>
              <div className='flexBetween w-full'>
                <p className='regular-16 text-gray-20'>Start Track</p>
              </div>

              <p className='bold-20 mt-2'>Pines Road Camp</p>
            </div>
            
          I</div>
        </div>
      </div>
    </section>
  )
}

export default Guide
