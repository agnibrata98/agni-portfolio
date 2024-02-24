import { useState } from "react"
import { motion } from "framer-motion"
import Links from "./links/Links"
import "./sidebar.scss"
// import ToggleButton from "./toggleButton/ToggleButton"
function Sidebar() {
    const [open, setOpen] = useState(false)
    const variants = {
        open:{
            clipPath:"circle(1200px at 50px 50px)",
            transition:{
                type:"spring",
                stiffness:20,
            },
        },
        closed:{
            clipPath: "circle(30px at 50px 50px)",
            transition:{
                delay:0.5,
                type:"spring",
                stiffness:400,
                damping:40,
            },
        },
    };
  return (
    <motion.div className="sidebar" animate={open?"open":"closed"}>
        <motion.div className="bg" variants={variants}>
            <Links/>
        </motion.div>
        <button >
        <label class="hamburger">
        <input type="checkbox" onChange={()=>setOpen((prev) => !prev)}/>
            <svg viewBox="0 0 32 32">
                <path class="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                <path class="line" d="M7 16 27 16"></path>
            </svg>
        </label>
    </button>
        
    </motion.div>
  )
}

export default Sidebar