import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'

function Projects() {
  return (
    <div className='border-b border-contrast pb-20 flex flex-col items-center overflow-x-hidden pt-20 -mt-20' id='projects'>
        <motion.h2 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1 }}
            className='my-20 text-center text-4xl'>Projects</motion.h2>
        <div className='flex flex-col justify-center gap-12'>
            {PROJECTS.map((project, index) => (
                <div key={index} className='flex gap-4 sm:gap-16 flex-col items-center sm:flex-row'>
                    <motion.img src={project.image} alt={project.title} whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1 }} 
                            className='rounded w-40 h-40' />
                    <motion.div 
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1 }}
                        className="w-full max-w-xl flex flex-col justify-center items-center sm:items-start text-center sm:text-left">
                        <h3 className="mb-2 font-semibold">{project.title}</h3>
                        <p className='mb-4 text-gray'>{project.description}</p>
                        <div className='flex flex-wrap justify-center sm:justify-start'>
                        {project.technologies.map((tech, index) => (
                            <span key={index} className='mr-2 mt-4 rounded bg-accent px-2 py-1 text-sm font-bold text-black'>
                                {tech}
                            </span>
                        ))}
                        </div>
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects