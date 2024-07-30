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

const Contact = () => {
  return (
    <div>contact page</div>
  )
}

export default Contact