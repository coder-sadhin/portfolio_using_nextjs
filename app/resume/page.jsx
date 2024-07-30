"use client";

import {
  FaHtml5,
  FaCss3,
  Fajs,
  FaReact,
  FaFigma,
  FaNodeJs
} from 'react-icons/fa'

import {
  SiTailwindcss,
  SiNextdotjs
} from 'react-icons/si'


// about data
const about={
  title:"About me",
  description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore illum molestias a quibusdam pariatur iusto officiis blanditiis dolorum, ad exercitationem maiores culpa non corporis voluptate sequi molestiae! Pariatur, libero mollitia!",
  info:[
    {
      fieldName: "Name",
      fieldValue: "Md Akkas Ali"
    },
    {
      fieldName: "Phote",
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
      fieldValue: "Bangla, English, "
    },
  ]
}

// experience data
const experience={
  icon:'/assets/resume/badge.svg',
  title:'My experience',
  description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore illum molestias a quibusdam pariatur iusto officiis blanditiis dolorum, ad exercitationem maiores culpa non corporis voluptate sequi molestiae! Pariatur, libero mollitia!",
  items:[
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
const education={
  icon:'/assets/resume/cap.svg',
  title:'My education',
  description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore illum molestias a quibusdam pariatur iusto officiis blanditiis dolorum, ad exercitationem maiores culpa non corporis voluptate sequi molestiae! Pariatur, libero mollitia!",
  items:[
    {
      institution:"Phitron.io",
      degree: "CSE Fundamentals",
      duration: "2023 - Present"
    },
    {
      institution:"Jingdezhen Ceramic Univarsity - China",
      degree: "Bachelor in Computer Science",
      duration: "2023 - Present"
    },
    {
      institution:"Rajshahi Polytechnic Institute - Bangladesh",
      degree: "Diploma in Computer Engineering",
      duration: "2018 - 2022"
    },
    {
      institution:"Programming-Hero",
      degree: "Next Level Web Developer",
      duration: "2022"
    },
    {
      institution:"Programming-Hero",
      degree: "Full Stack Web Developer",
      duration: "2022 - 2023"
    },
    {
      institution:"Freelancer Nasim",
      degree: "Front-End Web Design",
      duration: "2021"
    },
    {
      institution:"Dreamland it",
      degree: "Web Design with WP",
      duration: "2020"
    },
  ]
}

// skills data
const skills={
  title:'My skills',
  description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore illum molestias a quibusdam pariatur iusto officiis blanditiis dolorum, ad exercitationem maiores culpa non corporis voluptate sequi molestiae! Pariatur, libero mollitia!",
  items:[
    {
      icon:<FaHtml5 />,
      name: "html 5"
    },
    {
      icon:<FaCss3 />,
      name: "css 3"
    },
    {
      icon:<SiTailwindcss />,
      name: "tailwind.css"
    },
    {
      icon:<Fajs />,
      name: "javascript"
    },
    {
      icon:<FaReact />,
      name: "react.js"
    },
    {
      icon:<SiNextdotjs />,
      name: "next.js"
    },
    {
      icon:<FaNodeJs />,
      name: "node.js"
    },
    {
      icon:<FaFigma />,
      name: "figma"
    },
  ]
}

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
      <motion.div
          initial={{opacity:0}}
          animate={{
            opacity:1,
            transition:{
              delay:2.4,
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


              {/* experience */}
              <div className='max-h-[70vh] w-full'>
                <TabsContent value="experience" className="w-full pb-5 md:pb-10 ">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className='text-4xl font-bold'>{experience.title}</h3>
                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
                  
                  <ScrollArea className="h-[400px]">
                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                      {experience.items.map((item,index)=>{
                        return(
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
                <TabsContent value="education" className="w-full">
                  education
                </TabsContent>

              {/* skills */}
                <TabsContent value="skills" className="w-full">
                  skills
                </TabsContent>

              {/* about */}
                <TabsContent value="about" className="w-full">
                  about
                </TabsContent>

              </div>
            </Tabs>
          </div>
        </motion.div>
  )
}

export default Resume