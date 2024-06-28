'use client'
import { motion } from 'framer-motion'
import React from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'

type Props = {}
type input = {
  name: string,
  email: string,
  subject: string,
  message: string
}
const Contact = (props: Props) => {
  const { register, handleSubmit } = useForm<input>()
  const onSubmit: SubmitHandler<input> = formData => {
    window.location.href = `mailto:ammar.hajbakour@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
  }
  return (
    <div
      className='h-screen relative text-center flex flex-col items-center justify-center gap-8'>
      <h3 className='absolute top-24 page-title text-shadow'>Contact</h3>
      <motion.form
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, delay: 0.5 }}
        onSubmit={handleSubmit(onSubmit)} className='w-full  max-w-lg flex flex-col gap-2'>
        <p className='text-sm md:text-xl text-stone-400 text-center'>I am always open to discussing new projects. <span className='decoration-primary underline'>Let us talk.</span></p>
        <p className='text-sm md:text-xl text-primary text-center'>ammar.hajbakour@gmail.com</p>
        <div className='flex flex-wrap gap-2'>
          <input {...register('name')} className='contact-input md:w-1/2' type="text" placeholder='Name' />
          <input {...register('email')} className='contact-input md:w-[calc(50%-.5rem)]' type="email" placeholder='Email' />
        </div>
        <input {...register('subject')} className='contact-input' type="text" placeholder='Subject' />
        <textarea {...register('message')} className='contact-input' placeholder='Message' />
        <button className='bg-primary hover:bg-primary/80 rounded-sm transition duration-300 text-black font-bold py-2 text-lg uppercase tracking-widest' type='submit'>Send</button>
      </motion.form>
    </div>
  )
}

export default Contact