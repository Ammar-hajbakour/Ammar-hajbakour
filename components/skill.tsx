'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

type Props = { skill: string, dirTop?: boolean }

const skill = (props: Props) => {
  return (
    <motion.div
      className='w-16 h-16 md:w-28 md:h-28 group relative flex cursor-pointer'
      whileHover={{ scale: 1.05 }}
      initial={{ y: props.dirTop ? -200 : 200, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      // animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.3 }}
    >
      <Image
        className='rounded-full border border-stone-800 w-full h-full p-3 object-cover filter group-hover:grayscale transition duration-300 ease-in-out'
        src={`https://img.icons8.com/color/96/${props.skill.toLowerCase()}`} width={96} height={96} alt={props.skill} />
    </motion.div>
  )
}

export default skill