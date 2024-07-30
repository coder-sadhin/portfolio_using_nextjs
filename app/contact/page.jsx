"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt} from "react-icons/fa";

const info = [
  {
    icon: < FaPhoneAlt/>,
    title: "Phone",
    description:"(+86) 1867 989 4390"
  },
  {
    icon: < FaEnvelope/>,
    title: "Email",
    description:"codersadhin@gmail.com"
  },
  {
    icon: < FaMapMarkedAlt/>,
    title: "Address",
    description:"Jingdezhen, Jianxi, China"
  },
]

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        transition:{delay:2.4, duration: 0.4, ease:"easeIn"}
      }}
    >
      <div className="container mx-auto py-5">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[65%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let't work together</h3>
              <p className="text-white/60">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dolorem!</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input className="input" type="firstname" placeholder="Firstname"/>
                <Input className="input" type="lastname" placeholder="Lastname"/>
                <Input className="input" type="email" placeholder="Email"/>
                <Input className="input" type="phone" placeholder="Phone"/>
              </div>

              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">UI/UX Design</SelectItem>
                    <SelectItem value="mst">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                className="h-[200px]"
                placeholder="Type your messege here."
              />

              <Button size='md' className="max-w-40">
                Send messege
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item,index)=>{
                return(
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div>{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact