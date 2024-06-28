"use client"
import React from 'react'
import Skill from './skill'

type Props = {}

const Skills = (props: Props) => {
  const skills = [
    { name: "CSS3", dirTop: true },
    { name: "Tailwindcss", dirTop: true },
    { name: "JavaScript", dirTop: true },
    { name: "Nodejs", dirTop: true },
    { name: "TypeScript", dirTop: true },
    { name: "angularjs", dirTop: true },
    { name: "Nextjs", dirTop: false },
    { name: "Nestjs", dirTop: false },
    { name: "mongodb", dirTop: false },
    { name: "Wordpress", dirTop: false },
    { name: "Woocommerce", dirTop: false },
    { name: "Git", dirTop: false },

  ]

  return (
    <div className='py-24 relative flex flex-col items-center gap-8 '>
      <h3 className='page-title text-shadow'>Skills</h3>
      <div className="grid grid-cols-4 md:grid-cols-6 gap-8 md:gap-12">
        {skills.map(skill => (
          <Skill key={skill.name} skill={skill.name} dirTop={skill.dirTop} />
        ))}
      </div>
    </div>
  )
}

export default Skills