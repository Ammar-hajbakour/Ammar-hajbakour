'use client'
import { motion } from 'framer-motion'
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import Link from "next/link"

type Props = {}

const initial = {
  opacity: 0,
  x: 500,
  scale: 0.5
}
const to = {
  opacity: 1,
  x: 0,
  scale: 1
}
const transition = {
  duration: 0.5,
  delay: 1
}
const Header = (props: Props) => {
  return (
    <div className='flex items-center justify-between max-w-4xl mx-auto'>

      <motion.div className="flex flex-wrap gap-2"
        initial={{ ...initial, x: -500 }}
        animate={{ ...to }}
        transition={{ ...transition }}
      >

        <Link href={"#about"}>
          <button className="hero-btn">About</button>
        </Link>
        <Link href={"#projects"}>
          <button className="hero-btn">Projects</button>
        </Link>
        <Link href={"#contact"}>
          <button className="hero-btn">Contact</button>
        </Link>
      </motion.div>
      <motion.div
        initial={{ ...initial }}
        animate={{ ...to }}
        transition={{ ...transition }}
        className='-ml-2'
      >
        <SocialIcon style={{ height: 40, width: 40 }} url='https://github.com/Ammar-hajbakour' fgColor='#F7AB0A' bgColor='transparent' target="_blank" />
        <SocialIcon style={{ height: 40, width: 40 }} url='https://www.linkedin.com/in/ammar-hajbakour-28204a21b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3ByI2FbZsURAKWHC%2FWgixfdw%3D%3D' fgColor='#F7AB0A' bgColor='transparent' target="_blank" />
        {/* <SocialIcon style={{ height: 40, width: 40 }} url='mailto:ammar.hajbakour@gmail.com' fgColor='#F7AB0A' bgColor='transparent' target="_blank" /> */}
      </motion.div>


    </div>
  )
}

export default Header