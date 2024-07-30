"use client";

import {
  FaHtml5,
  FaCss3Alt as FaCss3,
  FaJs as FaJs,
  FaReact,
  FaFigma,
  FaNodeJs
} from 'react-icons/fa';

import {
  SiTailwindcss,
  SiNextdotjs
} from 'react-icons/si';

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

// about data
const about = {
  title: "About me",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore illum molestias a quibusdam pariatur iusto officiis blanditiis dolorum, ad exercitationem maiores culpa non corporis voluptate sequi molestiae! Pariatur, libero mollitia!",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Md Akkas Ali"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+86) 1867 989 4390"
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years"
    },
    {
      fieldName: "Skype",
      fieldValue: "2+ Years"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Bangladeshi"
    },
    {
      fieldName: "Email",
      fieldValue: "codersadhin@gmail.com"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Languages",
      fieldValue: "Bangla, English"
    },
  ]
}

// experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore illum molestias a quibusdam pariatur iusto officiis blanditiis dolorum, ad exercitationem maiores culpa non corporis voluptate sequi molestiae! Pariatur, libero mollitia!",
  items: [
    {
      company: "Pythonist India",
      position: "Full Stack Web Developer",
      duration: "05/2023 - 09/2023"
    },
    {
      company: "Pythonist India",
      position: "Font-end Developer (INTERN)",
      duration: "02/2023 - 04/2023"
    },
    {
      company: "VLaunchU",
      position: "Web Developer (INTERN)",
      duration: "12/2022 - 02/2023"
    },
    {
      company: "DIT - Learnig Platform",
      position: "WP Designer (INTERN)",
      duration: "08/2020 - 01/2021"
    },
  ]
}

// education data
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore illum molestias a quibusdam pariatur iusto officiis blanditiis dolorum, ad exercitationem maiores culpa non corporis voluptate sequi molestiae! Pariatur, libero mollitia!",
  items: [
    {
      institution: "Phitron.io",
      degree: "CSE Fundamentals",
      duration: "2023 - Present"
    },
    {
      institution: "Jingdezhen Ceramic University - China",
      degree: "Bachelor in Computer Science",
      duration: "2023 - Present"
    },
    {
      institution: "Rajshahi Polytechnic Institute - Bangladesh",
      degree: "Diploma in Computer Engineering",
      duration: "2018 - 2022"
    },
    {
      institution: "Programming-Hero",
      degree: "Next Level Web Developer",
      duration: "2022"
    },
    {
      institution: "Programming-Hero",
      degree: "Full Stack Web Developer",
      duration: "2022 - 2023"
    },
    {
      institution: "Freelancer Nasim",
      degree: "Front-End Web Design",
      duration: "2021"
    },
    {
      institution: "Dreamland IT",
      degree: "Web Design with WP",
      duration: "2020"
    },
  ]
}

// skills data
const skills = {
  title: 'My skills',
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore illum molestias a quibusdam pariatur iusto officiis blanditiis dolorum, ad exercitationem maiores culpa non corporis voluptate sequi molestiae! Pariatur, libero mollitia!",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5"
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3"
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS"
    },
    {
      icon: <FaJs />,
      name: "JavaScript"
    },
    {
      icon: <FaReact />,
      name: "React.js"
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js"
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js"
    },
    {
      icon: <FaFigma />,
      name: "Figma"
    },
  ]
}

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn"
        }
      }}
      className="min-h-[80vh] flex items-center justify-center py-12"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue='experience'
          className='flex flex-col xl:flex-row gap-[60px]'
        >
          <TabsList 
            className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6"
          >
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className='max-h-[70vh] w-full'>
            {/* experience */}
            <TabsContent value="experience" className="w-full pb-5 md:pb-10">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>

                <ScrollArea className="h-[400px]">
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                        >
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                          <div className='flex items-center gap-3'>
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full pb-5 md:pb-10">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>

                <ScrollArea className="h-[400px]">
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                        >
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                          <div className='flex items-center gap-3'>
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.institution}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full pb-5 md:pb-10">
              <div className='flex flex-col gap-[30px]'>
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                </div>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                            <div className='text-6xl group-hover:text-accent transition-all duration-300'>
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full pb-5 md:pb-10">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                  {about.info.map((infoItem, index) => {
                    return (
                      <li key={index} className='flex flex-col xl:flex-row gap-2'>
                        <span className='font-bold text-accent'>{infoItem.fieldName}: </span>
                        <span className='text-white/60'>{infoItem.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>

          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume;
