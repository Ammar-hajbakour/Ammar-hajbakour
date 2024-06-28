import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function BackgroundCircles({ }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: [0.1, 0.2, 0.3, 0.4, 0.5], scale: [1, 1.5, 1.5, 2, 1], borderRadius: ["20%", "20%", "50%", "80%", "20%"] }}
      transition={{ duration: 1 }}
      className='relative flex justify-center items-center'>
      <div className='w-[300px] h-[300px] md:w-[500px] md:h-[500px] border border-stone-600 rounded-full animate-pulse absolute' />
    </motion.div>
  )
}

export default BackgroundCircles