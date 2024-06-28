'use client'
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from "./BackgroundCircles"
import Image from "next/image"
import { motion } from "framer-motion"
type Props = {}

const Hero = (props: Props) => {
  const words = ["Responsive Web Design", "Angular+2", "Next.js", "Wordpress"]
  const [text, count] = useTypewriter({
    words,
    loop: true,
    delaySpeed: 2000
  })
  return (
    <div className='h-screen relative flex flex-col items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute z-10 ">
        <Image priority width={100} height={100} src="/me-2.png" className='md:w-32 md:h-32 rounded-full mx-auto mb-8 object-cover grayscale-[40%] sepia-[70%] blur-[.75px] contrast-[120%]' alt="Ammar Hajbakour" />
        <h2 className='page-title text-sm md:text-xl font-extralight text-shadow mb-4'>Full Stack Developer</h2>

        <h1 className='text-sm md:text-xl font-extralight'><span className="text-stone-400 tracking-[2px]">{text}</span><Cursor cursorColor='white' /></h1>

      </motion.div>
      <motion.div id="scroll-down"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <a className="animate-bounce border border-stone-600" href="#about"><span></span></a>
      </motion.div>
    </div>
  )
}
export default Hero