'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <>
      <h3 className='pt-24 page-title text-shadow'>About</h3>
      <div className='flex flex-col mt-8 md:pt-0 gap-8 md:flex-row items-center max-w-sm md:max-w-4xl mx-auto'>
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.25 }}
          className='w-48 h-48'
        >
          <Image src='/me-3.jpg' alt='me' width={200} height={200} className='w-full h-full flex-shrink-0 rounded-full object-cover object-center contrast-[110%]' />
        </motion.div>
        <motion.div className='space-y-2 flex-1'
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.25 }}
        >
          {/* <h4 className='tracking-[2px] text-xl text-text font-semibold text-center md:text-left'>Ammar Hajbakour</h4> */}
          <p className='text-sm md:text-lg leading-6 text-stone-400 text-center md:text-justify'>
            Passionate Fullstack developer with a knack for creating stunning, user friendly web experiences.

            Feel free to reach out to me if you are interested in working together or if you would like to discuss web development trends and best practices. Let us make your projects ability to tackle complex challenges, meet deadlines, and deliver high-quality code.make the web a better place.
          </p>
        </motion.div>
      </div>
    </>
  )
}

export default About

// 