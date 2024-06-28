'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

import { _projects, ProjectViewModel } from '../utils/static'
import Link from 'next/link'

type Props = {}

const Projects = (props: Props) => {
  const projects: ProjectViewModel[] = _projects
  const [show, setShow] = useState(false)
  const [_window, setWindowObject] = useState<Window | null>(null)
  const variants = {
    open: {
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    close: {
      opacity: 0,
      transition: {
        duration: 0.5
      }
    }

  }

  useEffect(() => {
    setWindowObject(window)
  }, [])

  const slider = useRef<HTMLDivElement>(null)
  let i = 0
  const scrollTo = (direction: 'left' | 'right') => {
    const screenWidth = _window?.innerWidth
    if (!screenWidth) return
    const end = screenWidth * (projects.length - 1 ?? 0)
    if (!slider.current) return;

    if (direction === 'left') {
      i <= 0 ? i = end : i -= screenWidth;
    } else {
      i >= end ? i = 0 : i += screenWidth;
    }
    slider.current.scrollTo({ left: i, behavior: 'smooth' });
  }

  return (

    <div className='relative flex flex-col items-center'>
      <h3 className='mb-12 page-title text-shadow' > Projects</h3>
      <div className="flex gap-4 justify-center ">
        <button onClick={() => { scrollTo('left') }} className='hero-btn'>Prev</button>
        <button onClick={() => { setShow(false) }} className={!show ? 'hero-btn w-9 h-9 border-primary' : 'hero-btn w-9 h-9'}>1</button>
        <button onClick={() => { setShow(true) }} className={show ? 'hero-btn w-9 h-9 border-primary' : 'hero-btn w-9 h-9'}>2</button>
        <button onClick={() => { scrollTo('right') }} className='hero-btn'>Next</button>
      </div>
      {/* <p className='text-sm md:text-xl text-stone-700 text-center'>Scroll horizontally to see more</p> */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, delay: 0.5 }}
        id='projectSlider' ref={slider} className='w-screen relative h-min flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory'>

        {projects.map((project: ProjectViewModel) => (
          <div
            key={project.name} className='flex flex-col items-center justify-center snap-center'>
            <div className='w-screen relative'>
              <Image className='w-full max-w-2xl mx-auto' src={project.images[0]} width={1000} height={1000} alt={project.name} />
              <motion.div
                variants={variants}
                initial={'close'}
                animate={show ? 'open' : 'close'}
                className='w-full absolute top-0'
              >
                <Image className='w-full max-w-2xl mx-auto' src={project.images[1]} width={1000} height={1000} alt={project.name} />
              </motion.div>
            </div>

            <h4 className='text-lg md:2xl text-text text-center'>{project.name}</h4>
            <p className='text-sm text-stone-700 text-center my-4'>{project.technologies.map((tech: string) => `${tech}, `)}</p>
            <div className="flex gap-4 justify-center">
              {project.liveLink ? <Link href={project.liveLink} target='_blank' className='hero-btn'>View Live</Link> : <button className='hero-btn'>View Live</button>}
              {project.codeLink ? <Link href={project.codeLink} target='_blank' className='hero-btn'>View Code</Link> : <button className='hero-btn'>View Code</button>}
            </div>
          </div>
        ))}
      </motion.div>

    </div >

  )
}

export default Projects