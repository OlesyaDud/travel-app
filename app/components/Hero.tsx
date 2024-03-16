import Image from 'next/image'
import React from 'react'
import camp from '../../public/campsite/camp-site.png'
import star from '../../public/star.svg'
import Button from './Button'


const Hero = () => {
  return (
    <section className='max-container padding-container flex flex-col gap-7 py-10 pb-32 xl:flex-row '>
      <div className='hero-map' />

      <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
        {/* <Image 
          src={camp}
          alt='camp'
          width={50}
          height={50}
          className='absolute left-[-1px] top=[-20px] w-10 lg:w-[50px] '
        /> */}

        <h1 className='bold-52 lg:bold-88'>
          Pinecrest Valley Campgrounds
        </h1>

          <p className='regular-16 mt-6 text-gray-30 xl:max-w-[520px]'>
            Offers a serene escape into nature's embrace, nestled amidst towering pine trees and rolling hills. With spacious campsites, tranquil hiking trails, and pristine lakeside vistas, it's the perfect destination for outdoor enthusiasts seeking adventure and relaxation.
          </p>
    

      <div className='my-11 flex flex-wrap gap-5'>
        <div className='flex items-center gap-2'>
          {Array(5).fill(1).map((_, index) => (
            <Image 
              src={star}
              key={index}
              alt='star'
              width={24}
              height={24}
            />
          ))}
        </div>

        <p className='bold-16 lg:bold-20 text-blue-70'>
          58K
          <span className='regular-16 lg:regular-20 ml-1'>
            Excelent Reviews
          </span>
        </p>
      </div>

        <div className='flex w-full gap-3 sm:flex-row xs:flex-col'>
          <Button type='button' title="Download App" variant='btn_green' />
          <Button type='button' title="How we work" icon='/play.svg' variant='btn_white_text' />
        </div>
      </div>

      <div className='relative flex flex-1 items-start'>
            <div className='relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8'>
              <div className='flex flex-col'>
                <div className='flexBetween'>
                  <p className='regular-16 text-gray-20'>Location</p>
                    <Image src={'/close.svg'} alt='close' width={24} height={24} />
                </div>

                <p className='bold-20 text-white'>PV Campgrounds</p>
              </div>

                <div className='flexBetween'>
                  <div className='flex flex-col'>
                    <p className='regular-16 block text-gray-20'>Distance</p>
                    <p className='block-20 text-white'>150 mi</p>
                  </div>

                  <div className='flex flex-col'>
                    <p className='regular-16 block text-gray-20'>Elevation</p>
                    <p className='block-20 text-white'>1.503 km</p>
                  </div>
                </div>

          
            </div>
      </div>
    </section>
  )
}

export default Hero
